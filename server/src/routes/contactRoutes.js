import { Router } from "express";
import { body } from "express-validator";
import { createMessage } from "../controllers/contactController.js";
import { contactLimiter } from "../middleware/rateLimiter.js";

const router = Router();

router.post(
  "/",
  contactLimiter,
  [
    body("name").trim().notEmpty().withMessage("Name is required").isLength({ max: 100 }),
    body("email").trim().isEmail().withMessage("A valid email is required").isLength({ max: 200 }),
    body("message").trim().notEmpty().withMessage("Message is required").isLength({ max: 5000 }),
  ],
  createMessage
);

export default router;
