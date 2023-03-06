-- CreateEnum
CREATE TYPE "Rating_Phrase" AS ENUM ('EASY', 'MEDIUM', 'HARD');

-- CreateEnum
CREATE TYPE "Rating_User_Phrase" AS ENUM ('EASY', 'MEDIUM', 'HARD', 'DONT_REMEMBER');

-- CreateEnum
CREATE TYPE "Type_user" AS ENUM ('ADMIN', 'USER');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "type" "Type_user" NOT NULL DEFAULT 'USER',

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "theme" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "theme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "phrase" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "translate" TEXT NOT NULL,
    "option1" TEXT NOT NULL,
    "option2" TEXT NOT NULL,
    "rating" "Rating_Phrase" NOT NULL DEFAULT 'EASY',
    "id_theme" TEXT NOT NULL,

    CONSTRAINT "phrase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_phrase" (
    "id" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "id_phrase" TEXT NOT NULL,
    "rating" "Rating_User_Phrase" NOT NULL DEFAULT 'EASY',
    "time" TIMESTAMP(3) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "count" INTEGER NOT NULL,

    CONSTRAINT "user_phrase_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "theme_name_key" ON "theme"("name");

-- CreateIndex
CREATE UNIQUE INDEX "user_phrase_id_user_id_phrase_key" ON "user_phrase"("id_user", "id_phrase");

-- AddForeignKey
ALTER TABLE "phrase" ADD CONSTRAINT "phrase_id_theme_fkey" FOREIGN KEY ("id_theme") REFERENCES "theme"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "user_phrase" ADD CONSTRAINT "user_phrase_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "user_phrase" ADD CONSTRAINT "user_phrase_id_phrase_fkey" FOREIGN KEY ("id_phrase") REFERENCES "phrase"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
