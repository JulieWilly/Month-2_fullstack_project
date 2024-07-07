import { Router } from "express";
import { getAllCourses, getSingleCourse, createNewCourse, updateCourse, deleteCourse } from "../controllers/courses.controllers.js";

const router = Router();

router.post('/add', createNewCourse)
router.get('/',getAllCourses )
router.get("/:course_id",getSingleCourse)

router.patch("/:id",updateCourse )


router.delete('/:id',deleteCourse )


export default router;