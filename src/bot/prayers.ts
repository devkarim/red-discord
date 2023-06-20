import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  Client,
  Message,
  MessageActionRowComponentBuilder,
  TextBasedChannel,
} from 'discord.js';
import { getAllGuilds, getGuildById } from '../services/db/guild';

enum PrayerCity {
  MANSOURA = 'Mansoura',
  CAIRO = 'Cairo',
  ISMAILIA = 'Al-Ismailia',
}

const PRAYER_CITIES = Object.values(PrayerCity);

const prayerBtns: ButtonBuilder[] = [];
for (const city of PRAYER_CITIES) {
  prayerBtns.push(
    new ButtonBuilder()
      .setCustomId('prayers.' + city)
      .setLabel(city)
      .setStyle(ButtonStyle.Primary)
  );
}
const prayerRow =
  new ActionRowBuilder<MessageActionRowComponentBuilder>().addComponents(
    ...prayerBtns
  );

export const makePrayersMessage = async (channel: TextBasedChannel) => {
  return channel.send({
    content: `Choose your location to show your city's prayer times.`,
    components: [prayerRow],
  });
};

export const addPrayersToMessage = async (message: Message) => {
  return message.edit({
    content: `Choose your location to show your city's prayer times.`,
    components: [prayerRow],
  });
};

const initPrayersForGuild = async (client: Client, guildId: string) => {
  const guild = await getGuildById(guildId);
  if (!guild) return;
  const { prayersChannelId, prayersMessageId } = guild;
  if (!prayersChannelId || !prayersMessageId) return;
  const channel = await client.channels.fetch(prayersChannelId);
  if (!channel || !channel.isTextBased()) return;
  const message = await channel.messages.fetch(prayersMessageId);
  if (!message) return;
  addPrayersToMessage(message);
};

const setupPrayers = async (client: Client) => {
  const allGuilds = await getAllGuilds();
  for (const guild of allGuilds) {
    initPrayersForGuild(client, guild.id);
  }
};

export default setupPrayers;
