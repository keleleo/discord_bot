import { ICommand } from 'dbc';
export default {
  name: 'owner',
  category: 'teste',
  description: 'owner only teste',
  ownerOnly: true,
  slash: 'both',
  callback: () => {
    return 'owner!!';
  },
} as ICommand;
