import {
  getSingleReviewer,
  getAllReviewers,
  createNewReviewer,
  deleteReviewer,
} from "../controllers/reviewers.controllers.js";
import { Router } from "express";
const router = Router();

router.get("/", getAllReviewers);

router.get("/:reviewer_id", getSingleReviewer);
router.post("/add", createNewReviewer);
// router.patch('/:reviewerId', )
router.delete("/:reviewer_id", deleteReviewer);

export default router;
