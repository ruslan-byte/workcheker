import TelegramBot from 'node-telegram-bot-api';
import {OldLengthOfWork} from './index.js'
// replace the value below with the Telegram token you receive from @BotFather
const token = '5809020048:AAG-9ao4idHh14mMuL4iT9NMsC2nx_KNn04';
const MyChatId = '937824793';

// Create a bot that uses 'polling' to fetch new updates
var bot = null;
export function init() 
{
	bot = new TelegramBot(token, {polling: true});
	console.log("BOT INIT");
	bot.on('message', (msg) => {
			bot.sendMessage(MyChatId, 'Работаем вроде.');
			bot.sendMessage(MyChatId, OldLengthOfWork);
	});
}


export function sendMessage(message)
{
	bot.sendMessage(MyChatId, message);
};
