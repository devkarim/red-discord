import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  Client,
  MessageActionRowComponentBuilder,
} from 'discord.js';
import { PRAYERS_CHANNEL_ID } from '../config/constants';

enum PrayerCity {
  MANSOURA = 'Mansoura',
  CAIRO = 'Cairo',
  ISMAILIA = 'Al-Ismailia',
}

const PRAYER_CITIES = Object.values(PrayerCity);

const setupPrayers = async (client: Client) => {
  const channel = await client.channels.fetch(PRAYERS_CHANNEL_ID);
  if (!channel || !channel.isTextBased()) return;
  await channel.messages.fetch({ limit: 1 });
  if (channel.lastMessage) {
    await channel.lastMessage.delete();
  }
  const buttons: ButtonBuilder[] = [];
  for (const city of PRAYER_CITIES) {
    buttons.push(
      new ButtonBuilder()
        .setCustomId('prayers.' + city)
        .setLabel(city)
        .setStyle(ButtonStyle.Primary)
    );
  }
  const row =
    new ActionRowBuilder<MessageActionRowComponentBuilder>().addComponents(
      ...buttons
    );

  await channel.send({
    content: `Choose your location to show your city's prayer times.`,
    components: [row],
  });
};

export default setupPrayers;
