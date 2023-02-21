import {
    PrismaClient,
    Rating_Phrase,
    Rating_User_Phrase,
    Type_user,
} from "@prisma/client";

const prisma = new PrismaClient();

export { prisma, Rating_Phrase, Rating_User_Phrase, Type_user };
