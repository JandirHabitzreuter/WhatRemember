-- CreateEnum
CREATE TYPE "Rating_User_Phrase" AS ENUM ('EASY', 'MEDIUM', 'HARD', 'DONT_REMEMBER');

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
CREATE INDEX "user_phrase_id_user_id_phrase_idx" ON "user_phrase"("id_user", "id_phrase");

-- AddForeignKey
ALTER TABLE "user_phrase" ADD CONSTRAINT "user_phrase_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_phrase" ADD CONSTRAINT "user_phrase_id_phrase_fkey" FOREIGN KEY ("id_phrase") REFERENCES "phrase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
