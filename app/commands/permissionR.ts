import { ICommand } from 'dbc';

export default {
  name: 'permissionR',
  category: 'test',
  description: 'Only teste guild',
  requiredPermissions:['MUTE_MEMBERS','BAN_MEMBERS'],
  slash: 'both',
  testOnly: true,
  callback: async () => {
    return 'You have permission';
  },
} as ICommand;
