import {
    PrismaClient,
    Rating_Phrase,
    Rating_User_Phrase,
} from "@prisma/client";

const prisma = new PrismaClient();

export { prisma, Rating_Phrase, Rating_User_Phrase };
