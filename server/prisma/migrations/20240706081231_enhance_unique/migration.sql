/*
  Warnings:

  - A unique constraint covering the columns `[first_name]` on the table `students_tb` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[last_name]` on the table `students_tb` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `students_tb` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "students_tb_first_name_key" ON "students_tb"("first_name");

-- CreateIndex
CREATE UNIQUE INDEX "students_tb_last_name_key" ON "students_tb"("last_name");

-- CreateIndex
CREATE UNIQUE INDEX "students_tb_email_key" ON "students_tb"("email");
