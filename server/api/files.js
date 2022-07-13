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

const pathCheck = (req, res, next) => {
  const inputPath = req.query.path || req.body.path;
  const destination = path.resolve("./public/uploads", inputPath);
  const relative = path.relative("./public/uploads", destination);
  if (relative.includes("..")) {
    return res.json({
      error: "trying to access unauthorized paths",
    });
  }
  req.inputPath = destination;
  next();
};
router.use(pathCheck);

router.delete("/", (req, res) => {
  const { name } = req.query;
  fs.unlink(`${req.inputPath}/${name}`, (error) => {
    return res.json({
      error,
      success: !error,
      query: req.query,
    });
  });
});
router.post("/rename", (req, res) => {
  const pathPrefix = path.resolve(req.inputPath);
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
  fs.readdir(req.inputPath, (err, fileNames) => {
    if (err || !fileNames) {
      return res.json({
        path: req.query.path,
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
      files,
      err,
    });
  });
});

export default router;
