import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getGamesService = async () => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });

  return games;
};
