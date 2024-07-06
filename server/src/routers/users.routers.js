import { Router } from "express";
import {config} from "dotenv"
import bcrypt from 'bcrypt';

import {createNewUser} from '../controllers/controllers.js'

config()
const router = Router();


router.post('/register',createNewUser)

export default router;