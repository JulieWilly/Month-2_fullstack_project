import { Router } from "express";
import { config } from "dotenv";
import { validateUser } from "../middleware/user.checks.js";

import { createNewUser, loginUser } from "../controllers/controllers.js";

config();
const router = Router();

router.post("/register", createNewUser);
router.post("/login", loginUser);

export default router;
