import { ICommand } from 'dbc';

export default {
  name: 'ping',

  category: 'test',
  description: 'Response with pong',

  slash: 'both',
  testOnly: false,
  callback: async ({ user, member }) => {
    return user.username;
  },
} as ICommand;
