import { Router } from "express";
import { getAllCourses, getSingleCourse, createNewCourse, updateCourse, deleteCourse } from "../controllers/courses.controllers.js";

const router = Router();

router.post('/add', createNewCourse)
router.get('/',getAllCourses )
router.get("/:course_id",getSingleCourse)

router.patch("/:course_id",updateCourse )


router.delete("/:course_id",deleteCourse )


export default router;