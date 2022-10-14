import { ICommand } from 'dbc';
import { Example } from '../../classes/Example';
export default {
  name: 'info',
  description: 'return info',
  slash: 'both',
  callback: ({ custom }) => {
    return custom?.getInfo();
  },
} as ICommand<Example>;
