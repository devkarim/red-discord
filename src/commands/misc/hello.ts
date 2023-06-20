import { SlashCommandBuilder } from 'discord.js';
import { SlashCommand } from '../../types/discord';
import { tr } from '../../helpers/utils';

const helloCmd: SlashCommand = {
  category: 'Misc',
  command: new SlashCommandBuilder()
    .setName('whoareyou')
    .setDescription('I wish I know who I am'),
  async execute(interaction) {
    if (Math.random() > 0.85) {
      await interaction.reply(
        tr('whoareyou.memory_is_blurry', 'whoareyou.wife')
      );
    } else {
      await interaction.reply(tr('whoareyou.introduction'));
    }
  },
};

export default helloCmd;
