import TelegramBot from 'node-telegram-bot-api';

// replace the value below with the Telegram token you receive from @BotFather
const token = '5809020048:AAG-9ao4idHh14mMuL4iT9NMsC2nx_KNn04';
const MyChatId = '937824793';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

export function sendMessage(message)
{
	bot.sendMessage(MyChatId, message);
};
