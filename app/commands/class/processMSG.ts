import { Example } from './../../classes/Example';
import { ICommand } from 'dbc';

export default {
  name: 'process',
  description: 'process the message',
  slash: 'both',
  options: [
    {
      name: 'message',
      description: 'message',
      type: 'STRING',
      required: true,
    },
  ],
  callback: ({ options,custom }) => {
    const value = options.get('message')?.value || 'error'
    return custom?.processMessage(value.toString());
  },
} as ICommand<Example>;
