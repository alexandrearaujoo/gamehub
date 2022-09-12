import { Request, Response } from "express";
import { getAdsService } from "../services/getAds.service";

class AdsController {
  static async index(req: Request, res: Response) {
    try {
      const ads = await getAdsService();

      return res.status(200).json(ads);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
    }
  }
}

export default AdsController;
