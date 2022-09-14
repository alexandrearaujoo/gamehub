import { Express } from "express";
import { adsRouter } from "./ads.routes";
import { gamesRouter } from "./games.routes";

export const appRoutes = (app: Express) => {
  app.use("/ads", adsRouter());
  app.use("/games", gamesRouter());
};
