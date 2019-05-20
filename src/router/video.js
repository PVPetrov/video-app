import { Router } from "express";
import * as handlers from "../controllers/video";

const video = Router();

// get all video names
video.get("/", handlers.getAllVideoNames);

video.get("/:id", handlers.findVideo);

export default video;
