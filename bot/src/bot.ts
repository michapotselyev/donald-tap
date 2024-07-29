import TelegramBot from "node-telegram-bot-api";
import 'dotenv/config';
import BotHandler from "./handlers/index.handler";

const botToken = process.env.BOT_TOKEN || '';

async function botStart() {
  try {
    const bot = new TelegramBot(botToken, { polling: true });

    console.log('Connection with Telegram API created.\nBot start polling...');

    new BotHandler(bot);

    console.log('Bot succesfully started!');
  } catch (error) {
    console.log('Connection with Telegram API can\'t be created.\nBot stop polling...');
    console.log('Bot stopped!');
    console.log('BOT ERROR: ');
    console.log(error);
  }
}

export default botStart;
