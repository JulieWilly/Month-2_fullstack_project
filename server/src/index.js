import express from 'express'
import userRouter from './routers/users.routers.js'



const great_tutor = express();
great_tutor.use(express.json())
great_tutor.use("/greatTutor.org", userRouter)

great_tutor.listen(3000, () => {

});

