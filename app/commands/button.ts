import { ButtonInteraction, MessageActionRow, MessageButton } from 'discord.js';
import { ICommand } from 'dbc';

export default {
  name: 'Button',
  category: 'test',
  description: 'Button example',

  slash: true,

  callback: async ({ interaction: msgInt, channel }) => {
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId('btn_potato')
          .setEmoji('🥔')
          .setLabel('Potato')
          .setStyle('SUCCESS')
      )
      .addComponents(
        new MessageButton()
          .setCustomId('btn_banana')
          .setEmoji('🍌')
          .setLabel('Banana')
          .setStyle('DANGER')
      );

    const link = new MessageActionRow().addComponents(
      new MessageButton()
        .setURL('https://github.com/keleleo')
        .setLabel('github')
        .setStyle('LINK')
    );

    const filter = () => {
      return true;
    };

    const collector = channel.createMessageComponentCollector({
      filter,
      max: 1,
      time: 1000 * 25,
    });

    collector.on('collect', (btnI: ButtonInteraction) => {
      const content = `Selected: ${
        btnI.customId === 'btn_banana' ? 'Banana' : 'Potato'
      }`;
      btnI.reply({ content, ephemeral: true });
    });

    collector.on('end', (collection) => {
      if (collection.first()?.customId === 'btn_banana') {
        msgInt.editReply({
          content: `🍌🍌🍌`,
          components: [],
        });
      } else if (collection.first()?.customId === 'btn_potato') {
        msgInt.editReply({
          content: `🥔🥔🥔`,
          components: [],
        });
      }
    });

    if (msgInt) {
      msgInt.reply({
        content: 'button working',
        components: [row, link],
        ephemeral: true,
      });
      return;
    }
    return 'button working';
  },
} as ICommand;
