import { Client, Intents } from 'discord.js';
import dotenv from 'dotenv';
import path from 'path'
import BotController from './core';

dotenv.config();

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING
  ],
});

client.on('ready', (event) => {
  new BotController(client, {
    comandsDir:path.join(__dirname,'./app/commands'),
    prefix: '!',
    testServer: ['987015990644715620'],
  });
});

client.login(process.env.TOKEN);
