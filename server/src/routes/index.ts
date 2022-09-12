import { Router } from "express";
import AdsController from "../controllers/ads.controller";

const router = Router();

router.get("", AdsController.index);

export default router;
