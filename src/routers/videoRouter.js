import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
  deleteVideo,
  tlqkfdk,
} from "../controllers/videoController";
import { protectorMiddleware, videoUpload } from "../middleware";

const videoRouter = express.Router();

const handleWatch = (req, res) => res.send("Watch video");
const handleEdit = (req, res) => res.send("edit video");

const id = "/:id([a-f0-9]{24})";

videoRouter.route(id).get(watch);
videoRouter
  .route(`${id}/edit`)
  .all(protectorMiddleware)
  .get(getEdit)
  .post(postEdit);
videoRouter.route(`${id}/delete`).all(protectorMiddleware).get(deleteVideo);
videoRouter
  .route("/upload")
  .all(protectorMiddleware)
  .get(getUpload)
  .post(
    videoUpload.fields([
      { name: "video", maxCount: 1 },
      { name: "thumb", maxCount: 1 },
    ]),
    postUpload
  );

export default videoRouter;
