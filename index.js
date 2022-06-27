const express = require("express");
const path = require("path");
const fs = require("fs");
const multer = require("multer");

const Markdoc = require("@markdoc/markdoc");

const app = express();

const myIp = `69.181.248.93`;
const myPort = `8035`;
const ipUrl = `${myIp}:${myPort}`;

app.use(express.static("public"));
app.use(express.json());
app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  console.log(req.ip);
  console.log(req.hostname);
  if (req.hostname.split(".").includes("v3")) {
    return res.send(`
    <style>
    * {
    text-align:center;
    }
    </style>
    <h1>Please Go To</h1>
    <code>${ipUrl}</code>
    <hr>
    
    <p>
    Put the above into the url bar like so:
    </p>
    <img src="https://v3.amayz.dev/public/photos/uploads/ip-url.png" alt="">
    <p>Depending on the operating system and browser you use, your browser may look different from the image above.</p>
    `);
  }
  const doc = `
# What's just happened!?
What happened when you put a **url** (i.e ${ipUrl}) into the url bar and hit "enter"?

1. The browser sends out a request.

[![](https://mermaid.ink/img/pako:eNpNzj8LwjAQBfCvctyk0Ao6dhBaddOlncQ4hObUoknqJUFK2-9u_Afe9Ibf412PtVWEGZ5ZthfYlsJAvPywt4GhYPtwxEdI0-Uwn0FFRjmQUNI9kPMDFJNdByur2-CJp59u8daLf-1aaxwNkGOCmljLRsXJ_uUF-gtpEpjFqCRfBQozRhdaJT1tVOMtY3aSN0cJyuBt1ZkaM8-BfmjdyPi-_qrxCR-SRbA)](https://mermaid.live/edit#pako:eNpNzj8LwjAQBfCvctyk0Ao6dhBaddOlncQ4hObUoknqJUFK2-9u_Afe9Ibf412PtVWEGZ5ZthfYlsJAvPywt4GhYPtwxEdI0-Uwn0FFRjmQUNI9kPMDFJNdByur2-CJp59u8daLf-1aaxwNkGOCmljLRsXJ_uUF-gtpEpjFqCRfBQozRhdaJT1tVOMtY3aSN0cJyuBt1ZkaM8-BfmjdyPi-_qrxCR-SRbA)

The short explanation is that your browser sent a request to my computer. My computer sent back a response back to your browser. You browser then displays the content in the response, allowing you to read this page.

The most important part of the url is the **hostname**, which tells the browser where to send the request.



1. When I signed up for internet with my internet service provider (ISP), they gave me an ip address: ${myIp}. When your browser sent a request
  > My first Markdoc page
`;

  const ast = Markdoc.parse(doc);

  const content = Markdoc.transform(ast);

  const html = Markdoc.renderers.html(content);
  res.send(`
<link rel="stylesheet" href="https://fonts.xz.style/serve/inter.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css">
  ${html}
  `);
});

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

app.get("/:article", (req, res) => {
  const articlePath = path.resolve(
    `./public/articles/${req.params.article}.md`
  );
  console.log("getting article", articlePath);
  fs.readFile(articlePath, (err, file) => {
    if (err) {
      return res.json({
        error: err,
        articlePath,
      });
    }
    const doc = file.toString();
    console.log(doc);
    const ast = Markdoc.parse(doc);

    const content = Markdoc.transform(ast);

    const html = Markdoc.renderers.html(content);
    res.send(`
<link rel="stylesheet" href="https://fonts.xz.style/serve/inter.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css">
  ${html}
  `);
  });
});

app.get("/:article/edit", (req, res) => {
  const doc = `
# Hello world.
  > My first Markdoc page
`;

  const ast = Markdoc.parse(doc);

  const content = Markdoc.transform(ast);

  const html = Markdoc.renderers.html(content);
  res.send(`
<link rel="stylesheet" href="https://fonts.xz.style/serve/inter.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css">
  ${html}
  `);
});

app.listen(process.env.PORT || 8123);
