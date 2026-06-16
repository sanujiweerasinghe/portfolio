import { validationResult } from "express-validator";
import nodemailer from "nodemailer";
import Message from "../models/Message.js";

let transporter = null;
if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
}

export async function createMessage(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }

  try {
    const { name, email, message } = req.body;
    const saved = await Message.create({ name, email, message });

    if (transporter && process.env.NOTIFY_EMAIL) {
      transporter
        .sendMail({
          from: process.env.SMTP_USER,
          to: process.env.NOTIFY_EMAIL,
          replyTo: email,
          subject: `New portfolio message from ${name}`,
          text: message,
        })
        .catch((err) => console.error("Failed to send notification email:", err.message));
    }

    res.status(201).json({ id: saved._id, message: "Message received." });
  } catch (err) {
    next(err);
  }
}
