import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  Client,
  MessageActionRowComponentBuilder,
} from 'discord.js';
import { PRAYERS_CHANNEL_ID, PRAYER_MESSAGE_ID } from '../config/constants';

enum PrayerCity {
  MANSOURA = 'Mansoura',
  CAIRO = 'Cairo',
  ISMAILIA = 'Al-Ismailia',
}

const PRAYER_CITIES = Object.values(PrayerCity);

const setupPrayers = async (client: Client) => {
  const channel = await client.channels.fetch(PRAYERS_CHANNEL_ID);
  if (!channel || !channel.isTextBased()) return;
  const message = await channel.messages
    .fetch(PRAYER_MESSAGE_ID)
    .then((m) => m)
    .catch(async (_) => await channel.send('To be edited for prayers.'));
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

  await message.edit({
    content: `Choose your location to show your city's prayer times.`,
    components: [row],
  });
};

export default setupPrayers;
