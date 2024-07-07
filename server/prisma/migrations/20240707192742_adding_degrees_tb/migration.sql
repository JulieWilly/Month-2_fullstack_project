-- CreateTable
CREATE TABLE "degrees_tb" (
    "degree_id" TEXT NOT NULL,
    "course_name" TEXT NOT NULL,
    "course_desc" TEXT NOT NULL,
    "course_duration" INTEGER NOT NULL,
    "course_rating" INTEGER NOT NULL,
    "previous_price" INTEGER NOT NULL,
    "current_price" INTEGER NOT NULL,

    CONSTRAINT "degrees_tb_pkey" PRIMARY KEY ("degree_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "degrees_tb_course_name_key" ON "degrees_tb"("course_name");
