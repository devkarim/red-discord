import { SlashCommandBuilder } from 'discord.js';
import { SlashCommand } from '../../types/discord';
import { tr } from '../../helpers/utils';

const helloCmd: SlashCommand = {
  command: new SlashCommandBuilder()
    .setName('whoareyou')
    .setDescription('I wish I know who I am'),
  async execute(interaction) {
    await interaction.reply(tr('whoareyou.introduction'));
    if (Math.random() > 0.95) {
      await interaction.reply(
        tr('whoareyou.memory_is_blurry', 'whoareyou.wife')
      );
    }
  },
};

export default helloCmd;
