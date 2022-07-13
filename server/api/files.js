import express from "express";
import fs from "fs";
import multer from "multer";
import path from "path";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    const uniquePrefix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${uniquePrefix}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });
router.post("/uploads", upload.array("assets[]"), (req, res) => {
  res.json({
    success: true,
  });
});
router.delete("/", (req, res) => {
  const { pathPrefix, name } = req.query;
  fs.unlink(`${pathPrefix}/${name}`, (err) => {
    res.json(req.query);
  });
});
router.post("/rename", (req, res) => {
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
router.get("/", (req, res) => {
  const absolutePath = path.resolve(req.query.path);
  console.log(absolutePath);
  fs.readdir(absolutePath, (err, fileNames) => {
    if (err || !fileNames) {
      return res.json({
        path: req.query.path,
        absolutePath,
        files: [],
      });
    }
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

export default router;
