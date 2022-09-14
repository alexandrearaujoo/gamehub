import { Request, Response } from "express";
import { getGameAdsService } from "../services/games/getGameAds.service";
import { getGamesService } from "../services/games/getGames.service";

class GamesController {
  static async create(req: Request, res: Response) {}

  static async index(req: Request, res: Response) {
    const games = await getGamesService();

    return res.status(200).json(games);
  }

  static async showAds(req: Request, res: Response) {
    const { id } = req.params;
    const ads = await getGameAdsService(id);

    return res.json(ads);
  }
}

export default GamesController;
