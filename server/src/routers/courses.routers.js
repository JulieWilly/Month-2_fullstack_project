import { Router } from "express";
import {
  getAllCourses,
  getSingleCourse,
  createNewCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/courses.controllers.js";

const router = Router();

router.post("/add", createNewCourse).get("/", getAllCourses).get("/:course_id", getSingleCourse).patch("/:course_id", updateCourse).delete("/:course_id", deleteCourse);

export default router;
