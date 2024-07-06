/*
  Warnings:

  - Changed the type of `password` on the `students_tb` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropIndex
DROP INDEX "students_tb_last_name_key";

-- AlterTable
ALTER TABLE "students_tb" DROP COLUMN "password",
ADD COLUMN     "password" INTEGER NOT NULL;
