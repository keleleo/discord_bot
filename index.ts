import { BotController } from 'dbc';
import { Client, Intents } from 'discord.js';
import dotenv from 'dotenv';
import path from 'path';

import { Example } from './app/classes/Example';

dotenv.config();

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGE_TYPING,
  ],
  partials: ['CHANNEL'],
});

client.on('ready', () => {
  const exampleClass = new Example();
  const serverTest = process.env.SERVER_TEST || ''
  new BotController<Example>(client, {
    prefix: '!',
    commandsDir: path.join(__dirname, '/app/commands'),
    testServer: [serverTest],
    ignoreBots: true,
    custom: exampleClass
  });

  console.log('Running');
});

client.login(process.env.TOKEN);
