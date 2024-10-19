import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

import {
  botCallbackValidateChainMethod,
  botMessageValidateChainMethod
} from 'src/validations/bot.validation';

/**
 * Middleware to determine if the request contains a message or a callback query
 * and apply the corresponding validation chain.
 */
export const validateBotRequest = (req: Request, res: Response, next: NextFunction) => {
  const { message, callback_query } = req.body;

  if (message) {
    return Promise.all(botMessageValidateChainMethod.map(
      (validator) => validator.run(message)
    )).then(() => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        next();
      })
      .catch(next);
  }

  if (callback_query) {
    return Promise.all(botCallbackValidateChainMethod.map(
      (validator) => validator.run(callback_query)
    )).then(() => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        next();
      })
      .catch(next);
  }

  return res.status(400).json({ message: 'Invalid request: no message or callback_query found' });
};
