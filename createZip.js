var fs = require("fs");
var archiver = require("archiver");

function zipDirectory(sourcePath, zipPath) {
  var zipStream = fs.createWriteStream(zipPath);

  var archive = archiver("zip");
  archive.on("warning", (err) => {
    if (err.code === "ENOENT") {
      console.log(err);
    } else {
      throw err;
    }
  });
  archive.on("error", (err) => {
    throw err;
  });
  archive.pipe(zipStream);
  archive.directory(sourcePath, false);
  archive.finalize();
}

var sourcePath = __dirname + "/src/images/icons/";
var zipPath = __dirname + "/src/images/System UIcons.zip";

console.log(`Zipping ${sourcePath} to ${zipPath} (overwrites existing)`);

zipDirectory(sourcePath, zipPath);
