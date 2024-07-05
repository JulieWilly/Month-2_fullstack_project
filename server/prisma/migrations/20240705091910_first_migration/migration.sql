-- CreateTable
CREATE TABLE "students_tb" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" INTEGER NOT NULL,

    CONSTRAINT "students_tb_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "students_tb_first_name_key" ON "students_tb"("first_name");

-- CreateIndex
CREATE UNIQUE INDEX "students_tb_email_key" ON "students_tb"("email");
