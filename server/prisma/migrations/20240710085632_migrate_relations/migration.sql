/*
  Warnings:

  - Added the required column `user_id` to the `courses_tb` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "courses_tb" ADD COLUMN     "user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "courses_tb" ADD CONSTRAINT "courses_tb_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "students_tb"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
