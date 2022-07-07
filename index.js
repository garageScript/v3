import express from "express";
import path from "path";
import fs from "fs";
import multer from "multer";

const app = express();

let myIp = `69.181.248.93`;

/*
fetch("https://ifconfig.me/all.json")
  .then((r) => r.json())
  .then((r) => {
    myIp = r.ip_addr;
  });
*/

const externalPort = `8035`;
const ipUrl = `${myIp}:${externalPort}`;

const getReqIp = (req) => {
  const initialIp = req.get("x-forwarded-for") || req.ip;
  return initialIp.replace("::ffff:", "");
};

app.use(express.static("dist"));
app.use(express.static("public"));
app.use(express.json());
app.use("/public", express.static("public"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/photos/uploads/");
  },
  filename: function (req, file, cb) {
    const uniquePrefix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${uniquePrefix}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });
app.post("/photos/uploads", upload.array("assets[]"), (req, res) => {
  res.json({
    success: true,
  });
});
app.delete("/files", (req, res) => {
  const { pathPrefix, name } = req.query;
  fs.unlink(`${pathPrefix}/${name}`, (err) => {
    res.json(req.query);
  });
});
app.post("/files/rename", (req, res) => {
  console.log(req.body);
  const pathPrefix = path.resolve(req.body.pathPrefix);
  fs.rename(
    `${pathPrefix}/${req.body.original}`,
    `${pathPrefix}/${req.body.newName}`,
    (error) => {
      res.json({
        error,
        success: !error,
      });
    }
  );
});
app.get("/files", (req, res) => {
  const absolutePath = path.resolve(req.query.path);
  fs.readdir(absolutePath, (err, fileNames) => {
    const files = fileNames.map((name) => {
      return {
        ...path.parse(name),
      };
    });
    res.json({
      path: req.query.path,
      absolutePath,
      files,
      err,
    });
  });
});

const exampleLocalIp = "192.168.1.23";

app.get(["/", "/:article"], (req, res) => {
  const reqIp = getReqIp(req);
  console.log("hostname?", req.hostname);
  const hostname = (req.hostname || "").trim();

  const articleName =
    hostname === myIp
      ? "ip-request-response-example"
      : req.params.article || "what-happens-when-you-buy-internet";

  let variables = {
    ipUrl,
    myIp,
    reqIp,
    exampleLocalIp,
    externalPort,
  };

  res.send(`
<link rel="stylesheet" href="https://fonts.xz.style/serve/inter.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css">
<link rel="stylesheet" href="/main.css">

<div id="root"></div>

<script>
const markdocVariableString = '${JSON.stringify(variables)}'
const mdContentPath = '/articles/${articleName}.md'
</script>

<script src="/main.js"></script>
  `);
});

app.listen(process.env.PORT || 8123);
