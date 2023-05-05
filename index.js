bot.on('message', (msg) => {
    const chatid = msg.chat.id;
    bot.sendMessage(chatid,'Привет, друг');
})
//Отвечает на любое сообщения 

bot.on('message', (msg) => {
    const chatid = msg.chat.id;
    bot.sendPhoto(chatid, '.png');
})
//Кидает фото на любое сообщения

//Конфиг клавиатуры
const keyboard = [
    [
      {
        text: 'Хочу кота', // текст на кнопке
        callback_data: 'moreKeks' // данные для обработчика событий
      }
    ],
    [
      {
        text: 'Хочу песика',
        callback_data: 'morePes'
      }
    ],
    [
      {
        text: 'Хочу проходить курсы',
        url: 'https://htmlacademy.ru/courses' //внешняя ссылка
      }
    ]
  ];
  

bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;
  
    let img = '';
  
    if (query.data === 'moreKeks') { // если кот
      img = 'keks.png';
    }
  
    if (query.data === 'morePes') { // если пёс
      img = 'pes.png';
    }
  
    if (img) {
      bot.sendPhoto(chatId, img, { // прикрутим клаву
        reply_markup: {
          inline_keyboard: keyboard
        }
      });
    } else {
      bot.sendMessage(chatId, 'Непонятно, давай попробуем ещё раз?', {
        // прикрутим клаву
        reply_markup: {
          inline_keyboard: keyboard
        }
      });
    }
  });