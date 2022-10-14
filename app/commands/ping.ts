import { ICommand } from 'dbc';
export default {
  name: 'ping',
  description: 'response with pong',

  slash:'both',
  testOnly:true,
  callback: () => {
    return 'pong';
  },
} as ICommand;
