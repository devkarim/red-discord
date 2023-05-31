import { SlashCommandBuilder } from 'discord.js';
import { SlashCommand } from '../../types/discord';

const helloCmd: SlashCommand = {
  command: new SlashCommandBuilder()
    .setName('whoareyou')
    .setDescription('I will tell you who I am'),
  async execute(interaction) {
    await interaction.deferReply();
    await interaction.editReply({
      files: ['assets/video/ana-el-fager.mp4'],
    });
  },
};

export default helloCmd;
