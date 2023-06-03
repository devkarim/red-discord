import { SlashCommandBuilder } from 'discord.js';
import { SlashCommand } from '../../types/discord';
import { tr } from '@/helpers/utils';

const helloCmd: SlashCommand = {
  command: new SlashCommandBuilder()
    .setName('whoareyou')
    .setDescription('I wish I knew who I am'),
  async execute(interaction) {
    await interaction.reply(tr('whoareyou.memory_is_blurry', 'whoareyou.wife'));
  },
};

export default helloCmd;
