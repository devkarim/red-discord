import { SlashCommandBuilder } from 'discord.js';
import { SlashCommand } from '../../types/discord';
import {
  createGuildIfNotExist,
  setGuildPrayersChannelId,
  setGuildPrayersMessageId,
} from '../../services/db/guild';
import { makePrayersMessage } from '../../bot/prayers';

const configPrayerChannelCmd: SlashCommand = {
  category: 'admin',
  command: new SlashCommandBuilder()
    .setName('setprayerschannel')
    .setDescription('Set prayers channel to be this current channel.'),
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });
    const { guildId, channelId, channel } = interaction;
    if (!guildId || !channelId || !channel || !channel.isTextBased)
      return interaction.deleteReply();
    await createGuildIfNotExist(guildId);
    await setGuildPrayersChannelId(guildId, channelId);
    interaction.editReply(
      `Set prayers channel ID to be ${channelId} in guild ${guildId}.`
    );
    const message = await makePrayersMessage(channel);
    if (!message) return;
    await setGuildPrayersMessageId(guildId, message.id);
    interaction.editReply(
      `Set prayers message ID to be ${message.id} in guild ${guildId}.`
    );
  },
};

const configCmds: SlashCommand[] = [configPrayerChannelCmd];

export default configCmds;
