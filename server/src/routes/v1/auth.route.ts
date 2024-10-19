import { Router } from "express";
import morgan from "morgan";
import "dotenv/config";

import validateRequestSchema from "src/middleware/validateRequestSchema.middleware";
import { tryCatch } from "src/middleware/tryCatch.middleware";

import authController from "src/controllers/auth.controller";

import { authValidateChainMethod } from "src/validations/auth.validation";

/**
 * Router for authentication-related endpoints.
 * @type {Router}
 */
const authRouter: Router = Router();

if (process.env.NODE_ENV !== "test") {
  authRouter.use(morgan("combined"));
}

/**
 * Route for auth.
 * Accessible to all users.
 * @name POST /v1/auth
 * @function
 * @memberof authRouter
 * @inner
 */
authRouter.post(
  "/",
  authValidateChainMethod,
  validateRequestSchema,
  tryCatch(authController.auth.bind(authController)),
);

export default authRouter;
