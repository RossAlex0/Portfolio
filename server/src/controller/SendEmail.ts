import { Request, Response, NextFunction } from "express";

export const send = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, subject } = req.body;

    res.status(200).json({
      message: `Merci ${name}, votre email concernant "${subject}" a bien été envoyé.\n Je vous recontact au plus vite. 🚀`,
    });
  } catch (error) {
    next(error);
  }
};
