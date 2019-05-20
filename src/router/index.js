import { Router } from "express";
import video from "./video";

const router = Router();

router.use("/videos", video);
export default router;
