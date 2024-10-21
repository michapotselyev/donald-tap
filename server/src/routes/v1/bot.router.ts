import { Router } from 'express';
import morgan from 'morgan';

import { tryCatch } from 'src/middleware/tryCatch.middleware';

import botController from 'src/controllers/bot.controller';
import { verifyTelegramSource } from 'src/middleware/verifyTelegramSource.middleware';
import { validateBotRequest } from 'src/middleware/validateBotRequest.middleware';

/**
 * Router for bot webhook.
 * @type {Router}
 */
const botRouter: Router = Router();

if (process.env.NODE_ENV !== "test") {
  botRouter.use(morgan("combined"));
}

/**
 * Route for Telegram bot webhook.
 * This route handles incoming messages and callback queries from Telegram.
 * @name POST /v1/bot/webhook
 * @function
 * @memberof botRouter
 * @inner
 */
botRouter.post(
  "/webhook",
  validateBotRequest,
  verifyTelegramSource,
  tryCatch(botController.webhook.bind(botController))
);

export default botRouter;
