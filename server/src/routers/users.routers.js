import { Router } from "express";
import { config } from "dotenv";
import { validateUser } from "../middleware/user.checks.js";
import verifyToken from '..//middleware/verifyToken.js'
import { createNewUser, loginUser, getUserName } from "../controllers/controllers.js";

config();
const router = Router();

router.post("/register", createNewUser);
router.post("/login", loginUser);
router.get('/:id', getUserName)

export default router;
