import { ICommand } from 'dbc';

var num = 0;
export default {
  name: 'add',
  category: 'test',
  description: 'Response with result',

  slash: 'both',
  callback: ({ message, user }) => {
    num++;
    if (message) {
      message.reply(`Current number: ${num}`);
    } else {
      return `Current number: ${num}`
    }
  },
} as ICommand;
