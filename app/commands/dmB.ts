import { ICommand } from 'dbc';

export default {
  name: 'dmb',
  category: 'teste',
  description: 'teste only dm message',
  dm: 'both',
  slash: 'both',
  callback: () => {
    return 'here is my DM????';
  },
} as ICommand;
