import { body } from "express-validator";

/**
 * Validation chain method for user registration
 */
export const authValidateChainMethod = [
  body("email")
    .exists({ checkFalsy: true })
    .withMessage("Email must be provided")
    .isString()
    .withMessage("Email must be a string")
    .isEmail()
    .withMessage("Invalid email format"),
];
