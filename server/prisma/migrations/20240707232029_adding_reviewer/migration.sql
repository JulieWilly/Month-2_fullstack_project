/*
  Warnings:

  - Added the required column `reviwer_ratings` to the `reviewers_tb` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "reviewers_tb" ADD COLUMN     "reviwer_ratings" INTEGER NOT NULL;
