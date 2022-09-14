import { Router } from "express";
import GamesController from "../controllers/games.controller";

const router = Router();

export const gamesRouter = () => {
  router.post("", GamesController.create);
  router.get("", GamesController.index)
  router.get("/:id/ads", GamesController.showAds)

  return router;
};
