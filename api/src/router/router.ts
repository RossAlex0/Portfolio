import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

import { verifyEmailRequest } from "../middleware/emailValidator";
import { createEmail } from "../middleware/transportEmail";
import { send } from "../controller/SendEmail";

router.get("/api", (req: Request, res: Response) => {
  res.json({ message: "Hello from API!" });
});
router.post("/send-email", verifyEmailRequest, createEmail, send);

export default router;
