import { ICommand } from 'dbc';

export default {
  name: 'welcome',
  category: 'test',
  description: `Response {welcome}`,

  slash: false,
  callback: () => {
    console.log('callback');
  },
} as ICommand;
