const express = require("express");
const path = require("path");
const fs = require("fs");
const multer = require("multer");

const app = express();

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
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(process.env.PORT || 8123);
