import getPrayerTimesByCity, { parseReadableTimings } from '../services/adhan';
import { ButtonAction } from '../types/discord';

const prayerButton: ButtonAction = {
  categoryId: 'prayers',
  async execute(interaction, city) {
    const msg = await interaction.deferReply({ ephemeral: true });
    const timings = await getPrayerTimesByCity(city);
    interaction
      .editReply({
        content: `Welcome to RED!\n\nPrayer Times in ${city} is:\n\n${parseReadableTimings(
          timings
        )}`,
      })
      .then(() => {
        setTimeout(() => msg.delete(), 15000);
      });
  },
};

export default prayerButton;
