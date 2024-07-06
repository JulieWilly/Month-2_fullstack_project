import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import bcrypt, { compareSync } from 'bcrypt'


export const createNewUser = async (req, res) => {
    try{
        const {firstName,lastName, email, password} = req.body
        const passwordToString = password.toString()
        const hashedPassword = bcrypt.hashSync(passwordToString, 10)
        console.log(hashedPassword)
        const createUser = await prisma.user.create({
            data:{
                firstName,
                lastName,
                email,
                password:hashedPassword
            }

        })
            res.status(200).json({success:true, message:'The user has been created successfully', data:createUser})


    }catch(err) {
        res.status(500).json({ success: false, message: err.message})
    }
}

export const loginUser = async (req, res) => {
    // get the password and the email.
    const { email, password } = req.body;
       try {
         // check if email compares.
         const user = await prisma.user.findFirst({
            where: {email}
         })

         if (user) {
            // compate password here to login the user.
            const matchPwd = bcrypt.compareSync(password, user.password)
            if(matchPwd === true) {
                res.json("Logging in successful")
            } else {
                res.status(400).json({success:false, message: "Wrong user credentials."})
            }
         } else{
            res.status(400).json({success:false, message: "Wrong credentials"})
         }

        //  res.send({data: user, message: "Email address exists"})

       } catch(err) {
        res.status(500).json({success: false, message: err.message})
       }
}