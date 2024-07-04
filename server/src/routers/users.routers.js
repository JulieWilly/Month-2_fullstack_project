import { Router } from "express";
import {config} from "dotenv"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()



const router = Router();
config();

router.post('/', async(req, res) => {
    try{
        const {firstName, lastName, email, password} = req.body;
        if (!firstName || !lastName || !email || !password) {
            res.send({message:" Please enter all fields"})
        }


        const create_user = await prisma.user.create({
            data:{
                firstName,
                lastName,
                email,
                password
            }
        })
        res.status(200).json({success: true, data:create_user})
    } catch(error) {
        res.status(500).json({success:false, message: error.message})
    }

    
})

export default router;