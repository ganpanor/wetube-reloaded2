import express from "express";
import {
  upload,
  watch,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
  deleteVideo,
} from "../controllers/videoController";

const videoRouter = express.Router();

const handleWatch = (req, res) => res.send("Watch video");
const handleEdit = (req, res) => res.send("edit video");

const id = "/:id([a-f0-9]{24})";

videoRouter.route(id).get(watch);
videoRouter.route(`${id}/edit`).get(getEdit).post(postEdit);
videoRouter.route(`${id}/delete`).get(deleteVideo);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;
