-- CreateEnum
CREATE TYPE "Rating_Phrase" AS ENUM ('EASY', 'MEDIUM', 'HARD');

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

-- AddForeignKey
ALTER TABLE "phrase" ADD CONSTRAINT "phrase_id_theme_fkey" FOREIGN KEY ("id_theme") REFERENCES "theme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
