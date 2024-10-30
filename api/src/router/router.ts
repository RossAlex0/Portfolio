import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

import { verifyEmailRequest } from "../middleware/emailValidator";
import { createEmail } from "../middleware/transportEmail";
import { send } from "../controller/SendEmail";

router.post("/send-email", verifyEmailRequest, createEmail, send);

export default router;
