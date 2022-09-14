import { Router } from "express";
import AdsController from "../controllers/ads.controller";

const router = Router();

export const adsRouter = () => {
  router.post("/:gameId", AdsController.create)
  router.get("", AdsController.index)
  router.get("/:id/discord", AdsController.show)

  return router;
};
