import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const verifyEmailRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userEmail = req.body;

  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().min(6).email().required(),
    subject: Joi.string().max(80).required(),
    message: Joi.string().required(),
  });

  try {
    await schema.validateAsync(userEmail, { abortEarly: false });

    next();
  } catch (error) {
    res.status(500).json({
      message: `Votre saisie est invalide, veuillez rééssayer.`,
      msgError: error,
    });
  }
};
