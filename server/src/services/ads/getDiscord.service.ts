import { PrismaClient } from "@prisma/client";
import AppError from "../../errors";

const prisma = new PrismaClient();

export const getDiscordService = async (id: string) => {
  const discord = await prisma.ad.findUnique({
    where: { id },
    select: { discord: true },
  });

  if (!discord) {
    throw new AppError('Ad not found', 404)
  }

  return discord
};
