
import { ICommand } from 'dbc';

export default {
  name: 'teste',
  category: 'test',
  description: 'Only teste guild',

  slash: 'both',
  testOnly: true,
  callback: async () => {
    return 'This is a test guild';
  },
} as ICommand;
