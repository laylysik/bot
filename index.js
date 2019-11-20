
// Подключаем библиотеку для работы с Telegram API в переменную
var TelegramBot = require('node-telegram-bot-api');

// Устанавливаем токен, который выдавал нам бот
var token = '1029407549:AAHNiAJkrkGII6igOHTJYdpKbSGTNnVrJQ8';
// Включить опрос сервера. Бот должен обращаться к серверу Telegram, чтобы получать актуальную информацию
// Подробнее: https://core.telegram.org/bots/api#getupdates
var bot = new TelegramBot(token, { polling: true });

// Написать мне ... (/echo Hello World! - пришлет сообщение с этим приветствием, то есть "Hello World!")
bot.onText(/\/echo (.+)/, function (msg, match) {
    var fromId = msg.from.id; // Получаем ID отправителя
    var resp = match[1]; // Получаем текст после /echo
    bot.sendMessage(fromId, resp);
});

// Простая команда без параметров
bot.on('message', function (msg) {
    var chatId = msg.chat.id; // Берем ID чата (не отправителя)
    // Фотография может быть: путь к файлу, поток (stream) или параметр file_id
    var photo = 'cats.png'; // в папке с ботом должен быть файл "cats.png"
    bot.sendPhoto(chatId, photo, { caption: 'Милые котята' });
});

const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.1029407549:AAHNiAJkrkGII6igOHTJYdpKbSGTNnVrJQ8)
bot.start((ctx) => ctx.reply('Привет! Как твои дела?'))
bot.help((ctx) => ctx.reply('Чем я могу тебе помочь?'))
bot.on('sticker', (ctx) => ctx.reply(''))
bot.hears('Привет', (ctx) => ctx.reply('И тебе привет :)'))
bot.launch()