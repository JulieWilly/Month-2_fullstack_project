import { Router } from "express";
import {config} from "dotenv"

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


const router = Router();
config();

router.post('/login', (req, res) => {
    // try{
    //     const {firstName,lastName, email, password}
    // }
})

export default router;