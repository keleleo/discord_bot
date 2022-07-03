import { ICommand } from 'dbc';

export default {
  name: 'dmf',
  category: 'teste',
  description: 'teste only dm message',
  dm: false,
  slash: 'both',
  callback: () => {
    return 'here is not my DM';
  },
} as ICommand;
