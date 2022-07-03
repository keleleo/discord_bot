import { ICommand } from 'dbc';

export default {
  name: 'dmt',
  category: 'teste',
  description: 'teste only dm message',
  dm: true,
  slash: 'both',
  callback: () => {
    return 'here is my DM';
  },
} as ICommand;
