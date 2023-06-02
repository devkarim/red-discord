import getPrayerTimesByCity, { parseReadableTimings } from '../services/adhan';
import { ButtonAction } from '../types/discord';

const prayerButton: ButtonAction = {
  categoryId: 'prayers',
  async execute(interaction, city) {
    const msg = await interaction.deferReply({ ephemeral: true });
    const timings = await getPrayerTimesByCity(city);
    await interaction.editReply({
      content: `Welcome to RED!\n\nPrayer times in ${city} is:\n\n${parseReadableTimings(
        timings
      )}`,
    });
    setTimeout(() => msg.delete(), 15000);
  },
};

export default prayerButton;
