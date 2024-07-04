import { Router } from "express";
import {config} from "dotenv"



const router = Router();
config();

router.post('/', (req, res) => {
    
})

export default router;