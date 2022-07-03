import { ICommand } from 'dbc';
import { Constants } from 'discord.js';
export default {
  name: 'sum',
  category: 'math',
  description: 'Sum num{1} + num{2}',

  slash: true,

  options: [
    {
      name: 'num1',
      description: 'First number',
      required: true,
      type: Constants.ApplicationCommandOptionTypes.NUMBER,
    },
    {
      name: 'num2',
      description: 'Second number',
      required: true,
      type: Constants.ApplicationCommandOptionTypes.NUMBER,
    },
  ],

  callback: ({ interaction, options }) => {
    const n1 = interaction.options.getNumber('num1');
    const n2 = interaction.options.getNumber('num2');
    return (n1|| 0) + (n2|| 0);
  },
} as ICommand;
