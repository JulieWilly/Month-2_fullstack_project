import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export const createNewUser = async (req, res) => {
    try{
        const {firstName,lastName, email, password} = req.body


        
        if (!firstName || !lastName || !email || !password) {
            // res.send("Please provide all the fields required.")
        }

        // const hashedPassword = bcrypt.hashSync(password, 10)
        const createUser = await prisma.user.create({
            data:{
                firstName,
                lastName,
                email,
                password
            }

        })
            res.status(200).json({success:true, message:'The user has been created successfully', data:createUser})


    }catch(err) {
        res.status(500).json({ success: false, message: err.message})
    }

}