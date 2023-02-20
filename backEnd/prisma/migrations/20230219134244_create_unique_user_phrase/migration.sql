/*
  Warnings:

  - A unique constraint covering the columns `[id_user,id_phrase]` on the table `user_phrase` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "user_phrase_id_user_id_phrase_idx";

-- CreateIndex
CREATE UNIQUE INDEX "user_phrase_id_user_id_phrase_key" ON "user_phrase"("id_user", "id_phrase");
