const fs = require('fs');
const { PREFIX, TOKEN, MONGODB_URL, DEFAULT_LEVERAGE_LIMIT } = require('./bot_config.json');
const { Client, Collection, Intents, MessageEmbed, DiscordAPIError } = require("discord.js");

const client = new Client({ intents: 513, partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

client.commands = new Collection;

const commandFolder = fs.readdirSync('./functions/commands');
for (const file of commandFolder) {
    const command = require(`./functions/commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Ready!');
});

client.login(BOT_TOKEN);

client.on('message', message => {
    if (!msg.channel.guild) { return; }
    
});