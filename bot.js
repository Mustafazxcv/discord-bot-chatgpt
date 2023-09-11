const Discord = require('discord.js');
const axios = require('axios');

const client = new Discord.Client();
const prefix = '!'; 

client.on('ready', () => {
    console.log(`Bot olarak giriş yapıldı: ${client.user.tag}`);
});

client.on('message', async (message) => {
    if (message.author.bot) return;


    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if (command === 'sohbet') {
            const userMessage = args.join(' ');
            if (!userMessage) {
                message.reply('Lütfen bir mesaj girin.');
                return;
            }


            const chatGptResponse = await getChatGptResponse(userMessage);
            message.reply(chatGptResponse.data.choices[0].text);
        }
    }
});

async function getChatGptResponse(message) {
    const apiKey = 'GPT3_API_KEY'; 
    const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

    try {
        const response = await axios.post(apiUrl, {
            prompt: message,
            max_tokens: 50, 
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
        });
        return response;
    } catch (error) {
        console.error('ChatGPT ile sohbet ederken bir hata oluştu:', error);
        return { data: { choices: [{ text: 'Üzgünüm, bir hata oluştu.' }] } };
    }
}

const token = 'BURAYA_BOT_TOKEN'; 
client.login(token);
