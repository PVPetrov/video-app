import fs from "fs";
import path from "path";

const videoPath = path.resolve(
  __dirname,
  "../",
  "../",
  "../",
  "../",
  "../",
  "../",
  "Videos",
  "short"
);

export const getAllVideoNames = (req, res, next) => {
  fs.readdir(videoPath, (err, files) => {
    if (!err) {
      res.send(files);
    } else {
      next(err);
    }
  });
};

export const findVideo = (req, res, next) => {
  res.send("video");
};
