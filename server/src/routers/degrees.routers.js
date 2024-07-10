import { Router } from "express";
import {
  getDegrees,
  getSingleDegree,
  createDegree,
  updateDegree,
  deleteDegrees,
} from "../controllers/degrees.controllers.js";

const router = Router();

router.get("/", getDegrees);

router.get("/:degree_id", getSingleDegree);

router.post("/", createDegree);

router.patch("/:degree_id", updateDegree);

router.delete("/:degree_id", deleteDegrees);

export default router;
