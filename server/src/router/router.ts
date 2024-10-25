import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

import { createEmail } from "../middleware/transportEmail";
import { send } from "../controller/SendEmail";

router.post("/send-email", createEmail, send);

export default router;
