import { ICommand } from 'dbc';

export default {
  name: 'permission',
  category: 'test',
  description: 'Only teste guild',
  permissions:['MUTE_MEMBERS','BAN_MEMBERS'],
  slash: 'both',
  testOnly: true,
  callback: async () => {
    return 'You have permission';
  },
} as ICommand;
