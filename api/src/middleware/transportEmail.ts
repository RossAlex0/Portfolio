import { Request, Response, NextFunction } from "express";
import nodemailer from "nodemailer";

const { EMAIL_USER, EMAIL_PASSWORD } = process.env;

export const createEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: EMAIL_USER,
      to: EMAIL_USER,
      subject: `From portfolio - Nouveau message de ${name} : ${email}`,
      text: `           
       Nom: ${name}    ||    Email: ${email}

----------------------------------------------------

    Sujet : ${subject} 
      
      
${message}`,
    };

    const response = await transporter.sendMail(mailOptions);

    if (response) {
      next();
    } else {
      res.status(500).json({ message: "Erreur lors de l'envoi de l'email." });
    }
  } catch (error) {
    next(error);
  }
};
