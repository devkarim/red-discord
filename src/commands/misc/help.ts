import { APIEmbedField, EmbedBuilder, SlashCommandBuilder } from 'discord.js';
import { SlashCommand } from '../../types/discord';
import { RED_HEX_COLOR } from '../../config/constants';
import ALL_SLASH_COMMANDS from '..';
import { capatlize } from '../../helpers/utils';

const parseReadableCommands = (): APIEmbedField[] => {
  const readableCommands: APIEmbedField[] = [];
  const categoryCommands: { [key: string]: SlashCommand[] } = {};
  for (const c of ALL_SLASH_COMMANDS) {
    const category: string = capatlize((c.category as string) || 'Other');
    if (!categoryCommands[category]) {
      categoryCommands[category] = [];
    }
    categoryCommands[category].push(c);
  }
  for (const category in categoryCommands) {
    if (category.toLowerCase() == 'admin') continue;
    const cmds = categoryCommands[category];
    readableCommands.push({ name: '🩸 ' + category, value: '\n' });
    for (const c of cmds) {
      const {
        command: { name, description },
      } = c;
      readableCommands.push({
        name: `/${name}\n`,
        value: description + '\n\n',
      });
    }
  }
  return readableCommands;
};

const helpCmd: SlashCommand = {
  command: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Shows all RED commands'),
  async execute(interaction) {
    const helpEmbed = new EmbedBuilder()
      .setColor(RED_HEX_COLOR)
      .setTitle('RED Commands List')
      .setAuthor({
        name: 'RED',
        iconURL: 'https://imgur.com/TNWYtZW.png',
        url: 'https://github.com/devkarim/red-discord',
      })
      .setDescription('Here you can experiement with my commands 💖')
      .setThumbnail('https://imgur.com/TNWYtZW.png')
      .addFields({ name: '\u200B', value: '\u200B' })
      .addFields(parseReadableCommands())
      .addFields({ name: '\u200B', value: '\u200B' })
      .setFooter({
        text: 'Copyright © 2023 RED | Made with ❤️ by devkarim',
        // iconURL: 'https://imgur.com/TNWYtZW.png',
      });
    interaction.reply({ embeds: [helpEmbed], ephemeral: true });
  },
};

export default helpCmd;
