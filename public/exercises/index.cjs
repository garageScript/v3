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
  const contentArr = content.split("\n");
  contentArr.shift(); // to remove module.exports =
  const contentObjStr = `{${contentArr.join("\n")}`;

  exerciseStringList[f.split(".")[0]] = contentObjStr;
});

module.exports = exerciseStringList;
