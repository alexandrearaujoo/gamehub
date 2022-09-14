import { PrismaClient } from "@prisma/client";
import { convertHourStringToMinutes } from "../../utils/convertHourStringToMinutes";

const prisma = new PrismaClient();

interface AdProps {
  name: string;
  yearsPlaying: number;
  discord: string;
  weekDays: number[];
  hourStart: string;
  hourEnd: string;
  useVoiceChannel: boolean;
}

export const createAdsService = async (data: AdProps, gameId: string) => {
  const ad = await prisma.ad.create({
    data: {
      name: data.name,
      yearsPlaying: data.yearsPlaying,
      discord: data.discord,
      weekDays: data.weekDays.join(","),
      hourStart: convertHourStringToMinutes(data.hourStart),
      hourEnd: convertHourStringToMinutes(data.hourEnd),
      useVoiceChannel: data.useVoiceChannel,
      gameId,
    },
  });

  return ad;
};
