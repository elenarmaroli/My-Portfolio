import express from "express";
import { check, validationResult } from "express-validator";
import { createContact } from "../controllers.js/contactControllers.js";

const router = express.Router();

const validation = [
  check("email")
    .notEmpty()
    .withMessage("E-mail is required.")
    .isEmail()
    .withMessage("Please provide a valid email address."),
  check("name").notEmpty().withMessage("A name is required."),
  check("message").notEmpty().withMessage("A message is required."),
];

router.post(
  "/create",
  validation,
  (req, res, next) => {
    const error = validationResult(req);
    if (error.isEmpty()) {
      next();
    } else {
      res.status(400).send({ error: error.array()[0].msg });
    }
  },
  createContact
);

export default router;
