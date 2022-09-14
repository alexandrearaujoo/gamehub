import { PrismaClient } from "@prisma/client";
import { convertMinutesToHour } from "../../utils/convertMinutesToHours";

const prisma = new PrismaClient();

export const getGameAdsService = async (id: string) => {
  const ads = await prisma.ad.findMany({
    where: { gameId: id },
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,
    },
    orderBy: { createdAt: "desc" },
  });

  const formatedAd = ads.map((ad) => {
    return {
      ...ad,
      hourStart: convertMinutesToHour(ad.hourStart),
      hourEnd: convertMinutesToHour(ad.hourEnd),
      weekDays: ad.weekDays.split(","),
    };
  });

  return formatedAd;
};
