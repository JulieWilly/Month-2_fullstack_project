import { Router } from "express";
import {
  getAllTutors,
  getSingleTutor,
  createNewTutor,
  updateTutor,
  deleteTutor,
} from "../controllers/tutors.controllers.js";
const router = Router();

router.get("/", getAllTutors);

router.get("/:tutors_id", getSingleTutor);
router.post("/add", createNewTutor);
router.patch("/:tutors_id", updateTutor);
router.delete("/:tutors_id", deleteTutor);

export default router;
