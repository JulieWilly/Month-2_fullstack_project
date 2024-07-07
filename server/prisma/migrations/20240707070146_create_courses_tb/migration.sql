-- CreateTable
CREATE TABLE "courses_tb" (
    "course_id" TEXT NOT NULL,
    "course_name" TEXT NOT NULL,
    "course_desc" TEXT NOT NULL,
    "course_duration" INTEGER NOT NULL,
    "course_rating" INTEGER NOT NULL,

    CONSTRAINT "courses_tb_pkey" PRIMARY KEY ("course_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "courses_tb_course_name_key" ON "courses_tb"("course_name");
