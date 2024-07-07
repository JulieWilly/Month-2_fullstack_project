-- CreateTable
CREATE TABLE "reviewers_tb" (
    "reviewer_id" TEXT NOT NULL,
    "reviewer_name" TEXT NOT NULL,
    "reviewer_comment" TEXT NOT NULL,

    CONSTRAINT "reviewers_tb_pkey" PRIMARY KEY ("reviewer_id")
);

-- CreateTable
CREATE TABLE "tutors_tb" (
    "tutors_id" TEXT NOT NULL,
    "tutors_name" TEXT NOT NULL,
    "tutors_desc" TEXT NOT NULL,
    "tutors_courses" TEXT NOT NULL,

    CONSTRAINT "tutors_tb_pkey" PRIMARY KEY ("tutors_id")
);
