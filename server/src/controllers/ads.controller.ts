import { Request, Response } from "express";
import { createAdsService } from "../services/ads/createAds.service";
import { getAdsService } from "../services/ads/getAds.service";
import { getDiscordService } from "../services/ads/getDiscord.service";

class AdsController {
  static async create(req: Request, res: Response) {
    const { gameId } = req.params;
    const {
      name,
      discord,
      useVoiceChannel,
      hourEnd,
      hourStart,
      weekDays,
      yearsPlaying,
    } = req.body;

    const ad = await createAdsService(
      {
        discord,
        hourEnd,
        hourStart,
        name,
        useVoiceChannel,
        weekDays,
        yearsPlaying,
      },
      gameId
    );

    return res.status(201).json(ad);
  }

  static async index(req: Request, res: Response) {
    const ads = await getAdsService();

    return res.status(200).json(ads);
  }

  static async show(req: Request, res: Response) {
    const { id } = req.params;
    const ads = await getDiscordService(id);

    return res.json(ads);
  }
}

export default AdsController;
