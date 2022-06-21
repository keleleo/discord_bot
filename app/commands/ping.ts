import { Guild } from 'discord.js';
import { ICommand } from '../../core/models/ICommand';

export default {
  name:'ping',

  category: 'test',
  description: 'Response with pong',

  slash: 'both',
  testOnly:true,
  callback:async ({ user,guild,channel }) => {
    return user.username;
  },
} as ICommand;
