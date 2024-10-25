import { Request, Response, NextFunction } from "express";

export const send = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { subject } = req.body;

    res.status(200).json({
      message: `Votre email concernant ${subject} a bien été envoyé. Je vous réponds au plus vite. 🚀`,
    });
  } catch (error) {
    next(error);
  }
};
