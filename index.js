let phrases = [
    { 
        img: './img/PZ_196.webp',
        name: ``,
    },
    { 
        img: './img/PZ_197.webp',
        name: ``,
    },
    { 
        img: './img/PZ_198.webp',
        name: ``,
    },
    { 
        img: './img/PZ_199.webp',
        name: ``,
    },
    { 
        img: './img/PZ_200.webp',
        name: ``,
    },
    { 
        img: './img/PZ_201.webp',
        name: ``,
    },
    { 
        img: './img/PZ_202.webp',
        name: ``,
    },
    { 
        img: './img/PZ_203.webp',
        name: ``,
    },
    { 
        img: './img/PZ_204.webp',
        name: ``,
    },
    { 
        img: './img/PZ_205.webp',
        name: ``,
    },
    { 
        img: './img/PZ_206.webp',
        name: ``,
    },
    { 
        img: './img/PZ_207.webp',
        name: ``,
    },
    { 
        img: './img/PZ_208.webp',
        name: ``,
    },
    { 
        img: './img/PZ_209.webp',
        name: ``,
    },
    { 
        img: './img/PZ_210.webp',
        name: ``,
    },
    { 
        img: './img/PZ_211.webp',
        name: ``,
    },
    { 
        img: './img/PZ_212.webp',
        name: ``,
    },
    { 
        img: './img/PZ_213.webp',
        name: ``,
    },
    { 
        img: './img/PZ_214.webp',
        name: ``,
    },
    { 
        img: './img/PZ_215.webp',
        name: ``,
    },
    { 
        img: './img/PZ_216.webp',
        name: ``,
    },
    { 
        img: './img/PZ_217.webp',
        name: ``,
    },
    { 
        img: './img/PZ_218.webp',
        name: ``,
    },
    { 
        img: './img/PZ_219.webp',
        name: ``,
    },
    { 
        img: './img/PZ_220.webp',
        name: ``,
    },
    { 
        img: './img/PZ_220.webp',
        name: ``,
    },
    { 
        img: './img/PZ_221.webp',
        name: ``,
    },
    { 
        img: './img/PZ_222.webp',
        name: ``,
    },
    { 
        img: './img/PZ_223.webp',
        name: ``,
    },
    { 
        img: './img/PZ_224.webp',
        name: ``,
    },
    { 
        img: './img/PZ_225.webp',
        name: ``,
    },
    { 
        img: './img/PZ_226.webp',
        name: ``,
    },
    { 
        img: './img/PZ_227.webp',
        name: ``,
    },
    { 
        img: './img/PZ_228.webp',
        name: ``,
    },
    { 
        img: './img/PZ_229.webp',
        name: ``,
    },
    { 
        img: './img/PZ_230.webp',
        name: `Захват`,
    },
    { 
        img: './img/PZ_231.webp',
        name: `Кружево`,
    },
    { 
        img: './img/PZ_232.webp',
        name: `Поглощение`,
    },
    { 
        img: './img/PZ_233.webp',
        name: `Люстра`,
    },
    { 
        img: './img/PZ_234.webp',
        name: `Факел`,
    },
    { 
        img: './img/PZ_235.webp',
        name: `Паприка`,
    },
    { 
        img: './img/PZ_236.webp',
        name: `Наложница`,
    },
    { 
        img: './img/PZ_237.webp',
        name: `Медальон`,
    },
    { 
        img: './img/PZ_238.webp',
        name: `Альбатрос`,
    },
    { 
        img: './img/PZ_239.webp',
        name: `Осьминог`,
    },
    { 
        img: './img/PZ_240.webp',
        name: `Лотос`,
    },
    { 
        img: './img/PZ_241.webp',
        name: `Трезубец`,
    },
    { 
        img: './img/PZ_242.webp',
        name: `Дабл`,
    },
    { 
        img: './img/PZ_243.webp',
        name: `Плуг`,
    },
    { 
        img: './img/PZ_244.webp',
        name: 'Снежинка',
    },
    { 
        img: './img/PZ_245.webp',
        name: 'Бабочки',
    },
];

const TelegramApi = require('node-telegram-bot-api')
const token = 'your_token'
const bot = new TelegramApi(token, {polling:true})


const startOptions = {
    reply_markup: JSON.stringify({  //
        inline_keyboard: [
            [{text: '☰ МЕНЮ', callback_data: '/menu'},]
        ]
    })
}

const gameOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Еще раз', callback_data: '/again'}]
        ]
    })
}

const gameOptions2 = { //
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: ' ', callback_data: '/'},{text: ' ', callback_data: '/'},{text: ' ', callback_data: '/'}],
            [{text: ' ', callback_data: '/'},{text: ' ', callback_data: '/'},{text: ' ', callback_data: '/'}],
            [{text: ' ', callback_data: '/'},{text: ' ', callback_data: '/'},{text: ' ', callback_data: '/'}],
        ]
    })
}

// Стартовая отрисовка 
const startA = async (chatId) => {
    await bot.sendSticker(chatId, "./sticker.webp")
    await bot.sendMessage(chatId, `Привет, этот бот создан дабы развлечь твою сексуальную жизнь. Так что, жарких поебушек)`, startOptions)
}

// Случайный выбор позы из массива 
const startGame_Pose = async (chatId) => {
    let num = phrases[Math.floor(Math.random() * phrases.length)]
    await bot.sendSticker(chatId, num.img, gameOptions)
}

// Отрисовка игры "крестики нолики"
const startGame_tic_tac_toe = async (chatId) => {
    await bot.sendMessage(chatId, `Игра крестики нолики \n__в разработке__ `, gameOptions2, )
}

const menuOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Игры', callback_data: '/menuGame'},{text: 'хуйня2', callback_data: '/'},{text: 'хуйня3', callback_data: '/'}]
        ]
    })
}

const menuGames = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Случайная поза', callback_data: '/startGame_Pose', onClick: ""},{text: 'Крестики нолики', callback_data: '/tic_tac'}]
        ]
    })
}

const menu = async (chatId) => {
    await bot.sendMessage(chatId, "☰ МЕНЮ", menuOptions)
}

const menuGame = async (chatId) => {
    await bot.sendMessage(chatId, "▷ ИГРЫ", menuGames)
}

const start = () => {

    bot.setMyCommands([
        {command: '/start', description: 'Начать'},
        {command: '/random_pose', description: 'Случайная поза'},
        {command: '/game_tic_tac_toe', description: 'Игра крестики нолики'},
    ])

    bot.on('message',  async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;

        if (text === '/start') {
            return startA(chatId);
        }
        if (text === '/startGame_Pose') {
            return startGame_Pose(chatId);
        }
        if (text === '/game_tic_tac_toe') {
            return startGame_tic_tac_toe(chatId);
        }
        return bot.sendMessage(chatId, `Алооо, зачем я по-твоему меню делал?😂\n"${text}" — такой команды нету`, menuOptions)
    })

    bot.on('callback_query', msg => {
        const data = msg.data;
        const chatId = msg.message.chat.id;

        if(data === '/again') {
            return startGame_Pose(chatId);
        }
        if(data === '/menu') {
            return menu(chatId);
        }
        if(data === '/menuGame') {
            return menuGame(chatId);
        }
        if(data === '/tic_tac') {
            return startGame_tic_tac_toe(chatId);
        }
        if(data === '/startGame_Pose') {
            return startGame_Pose(chatId);
        }
    })
}
start()

