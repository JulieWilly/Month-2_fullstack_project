import express from "express";
import userRouter from "./routers/users.routers.js";
import coursesRouter from "./routers/courses.routers.js";
import degreesRouter from "./routers/degrees.routers.js";
import cors from "cors";
import bodyParser from "body-parser";
import { config } from "dotenv";


config();
const great_tutor = express();

great_tutor.use(
  cors({
    origin: " http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PATCH"],
    credentials: true,
    //  allowedHeaders: ["Content-Type", "Authorization"]
  }),
);
great_tutor.use(bodyParser.json());

great_tutor.use(express.urlencoded({ extended: true }));

great_tutor.use(express.json());

great_tutor.use("/learn", userRouter);
great_tutor.use("/course", coursesRouter);
great_tutor.use("/degree", degreesRouter)

great_tutor.listen(3000, () => {
  console.log("Running at port 3000");
});
