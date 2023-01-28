-- DropForeignKey
ALTER TABLE "phrase" DROP CONSTRAINT "phrase_id_theme_fkey";

-- DropForeignKey
ALTER TABLE "user_phrase" DROP CONSTRAINT "user_phrase_id_phrase_fkey";

-- DropForeignKey
ALTER TABLE "user_phrase" DROP CONSTRAINT "user_phrase_id_user_fkey";

-- AddForeignKey
ALTER TABLE "phrase" ADD CONSTRAINT "phrase_id_theme_fkey" FOREIGN KEY ("id_theme") REFERENCES "theme"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "user_phrase" ADD CONSTRAINT "user_phrase_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE "user_phrase" ADD CONSTRAINT "user_phrase_id_phrase_fkey" FOREIGN KEY ("id_phrase") REFERENCES "phrase"("id") ON DELETE RESTRICT ON UPDATE RESTRICT;
