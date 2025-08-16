const TelegramBot = require('node-telegram-bot-api');

// تنظیمات
const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const WEBAPP_URL = 'https://game-bot2.github.io/tonbolla-01/'; // آدرس بازی شما

const bot = new TelegramBot(TOKEN, { 
  polling: true
});

// دستور /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  
  // ایجاد دکمه
  const keyboard = {
    inline_keyboard: [
      [{
        text: '🎮 Play Game',
        web_app: { url: WEBAPP_URL }
      }]
    ]
  };
  
  // ارسال پیام با دکمه (به انگلیسی)
  bot.sendMessage(
    chatId,
    '✨ Welcome to Tonbolla Game!\nClick the button below to start playing:',
    { reply_markup: JSON.stringify(keyboard) }
  );
});

console.log('✅ Bot activated...');
