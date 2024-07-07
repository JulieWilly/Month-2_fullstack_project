/*
  Warnings:

  - Added the required column `course_category` to the `courses_tb` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "courses_tb" ADD COLUMN     "course_category" TEXT NOT NULL;
