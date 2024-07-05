import express from 'express'
import userRouter from './routers/users.routers.js'
import cors from 'cors'
import { config } from 'dotenv';


config();
const great_tutor = express();


great_tutor.use(cors({
    origin:'http://localhost:5173',
    methods:["GET", "POST", "DELETE", "PATCH", "PUT"],
     allowedHeaders: ['Content-Type', 'Authorization']
}))

great_tutor.use(express.urlencoded( {extended:true }))



great_tutor.use(express.json())



great_tutor.use("/greatTutor.org", userRouter)

great_tutor.listen(3001, () => {

});

