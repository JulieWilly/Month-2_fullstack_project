import { Router } from "express";
import {config} from "dotenv"

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


const router = Router();
config();

router.post('/login',async (req, res) => {
    try{
        const {firstName,lastName, email, password} = req.body

        // if (!firstName || !lastName || !email || !password) {
        //     res.send("Please provide all the fields required.")
        // }
        const createUser = await prisma.user.create({
            data:{
                firstName,lastName,email,password
            }

        })
            res.status(200).json({success:true, message:'The user has been created successfully', data:createUser})


    }catch(err) {
        res.status(500).json({ success: false, message: err.message})
    }
})

export default router;