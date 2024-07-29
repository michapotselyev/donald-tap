import Joi from 'joi';
import type { Message, CallbackQuery, Metadata } from 'node-telegram-bot-api';

class Validator {
  private messageSchemaMsg = Joi.object({
    message_id: Joi.number().required(),
    from: Joi.object({
      id: Joi.number().required(),
      first_name: Joi.string().required(),
      last_name: Joi.string().optional(),
      username: Joi.string().required(),
      language_code: Joi.string().required()
    }).required(),
    chat: Joi.object({
      id: Joi.number().required(),
      type: Joi.string().required(),
      first_name: Joi.string().required(),
      last_name: Joi.string().optional(),
      username: Joi.string().required(),
    }).required(),
    text: Joi.string().optional(),
    date: Joi.number().required(),
  });

  private messageSchemaMetadata = Joi.object({ type: Joi.valid('text') });

  private callbackQuerySchema = Joi.object({
    id: Joi.string().required(),
    from: Joi.object({
      id: Joi.number().required(),
    }).required(),
  });

  validateMessage(msg: Message, metadata: Metadata) {
    return this.messageSchemaMsg.validate(msg)
      && this.messageSchemaMetadata.validate(metadata);
  }

  validateCallbackQuery(query: CallbackQuery) {
    return this.callbackQuerySchema.validate(query);
  }
}

export default Validator;
