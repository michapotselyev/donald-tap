import type TelegramBot from "node-telegram-bot-api";
import type { Message, CallbackQuery, Metadata } from "node-telegram-bot-api";
import { tryCatch } from "src/middlewares/tryCatch.middleware";
import Validator from "src/validations/index.validation";

class BotHandler {
  private readonly bot: TelegramBot;
  private readonly validator: Validator;

  constructor(bot: TelegramBot) {
    this.bot = bot;
    this.validator = new Validator();

    this.bot.on('message', tryCatch(this.validateAndHandleMessage.bind(this)));
    this.bot.on('callback_query', tryCatch(this.validateAndHandleCallback.bind(this)));
    this.bot.on('polling_error', tryCatch(this.error.bind(this)));
  }

  private async validateAndHandleMessage(msg: Message, metadata: Metadata) {
    const { error } = this.validator.validateMessage(msg, metadata);

    if (error) {
      console.error("Invalid message:", error.details);
      return;
    }

    await this.message(msg);
  }

  private async validateAndHandleCallback(query: CallbackQuery) {
    const { error } = this.validator.validateCallbackQuery(query);

    if (error) {
      console.error("Invalid callback query:", error.details);
      return;
    }

    await this.callback(query);
  }

  private restartPolling() {
    setTimeout(() => {
      this.bot.startPolling()
        .then(() => console.log('Polling restarted successfully'))
        .catch((err) => {
          console.log('Failed to restart polling:');
          console.log(err);
        });
    }, 5000);
  }

  private async message(msg: Message) {
    this.bot.sendMessage(msg.chat.id, 'Hello!');
  }

  private async callback(query: CallbackQuery) {
    console.log(query);
  }

  private async error(error: Error) {
    console.log("POLLING ERROR:")
    console.log(error);
    this.restartPolling();
  }
}

export default BotHandler;
