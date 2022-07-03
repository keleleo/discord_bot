import { ICommand } from 'dbc';
import { MessageActionRow, MessageButton } from 'discord.js';

export default {
  name: 'button',
  category: 'Testing',
  description: 'Testing',

  slash: true,
  testOnly: true,

  callback: async ({ interaction: msgInt, channel, member }) => {
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('ban_yes')
          .setEmoji('❤️')
          .setLabel('Confirm')
          .setStyle('SUCCESS')
      )
      .addComponents(
        new MessageButton()
          .setCustomId('ban_no')
          .setLabel('Cancel')
          .setStyle('DANGER')
      );
    const linkRow = new MessageActionRow();
    await msgInt.reply({
      content: 'Are you sure?',
      components: [row],
    });
    console.log(member != null);
    member?.roles.cache.forEach((element) => {
      console.log(element.name);
    });
  },
} as ICommand;
