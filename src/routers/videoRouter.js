import express from "express";
import { upload, see, edit, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

const handleWatch = (req, res) => res.send("Watch video");
const handleEdit = (req, res) => res.send("edit video");

videoRouter.get("/upload", upload);
videoRouter.get("/:id", see);
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/delete", deleteVideo);

export default videoRouter;
