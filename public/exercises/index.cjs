const fs = require("fs");

const exerciseStringList = {};

const files = fs
  .readdirSync("./public/exercises")
  .filter((e) => e !== "index.js");

files.forEach((f) => {
  if (f === "index.cjs") {
    return;
  }

  const content = fs.readFileSync(`./public/exercises/${f}`).toString();
  exerciseStringList[f.split(".")[0]] = content;
});

module.exports = exerciseStringList;
