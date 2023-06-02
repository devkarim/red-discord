import {
  ActivityType,
  ButtonInteraction,
  Client,
  Collection,
  CommandInteraction,
  Events,
  GatewayIntentBits,
} from 'discord.js';
import ALL_SLASH_COMMANDS from '../commands';
import { dbgErr, dbg } from '../helpers/utils';
import setupPrayers from './prayers';
import ALL_BUTTON_ACTIONS from '../buttons';
import { CURRENT_STATUS } from '../config/constants';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.slashCommands = new Collection();
client.buttons = new Collection();

for (const cmd of ALL_SLASH_COMMANDS) {
  client.slashCommands.set(cmd.command.name, cmd);
}

for (const btn of ALL_BUTTON_ACTIONS) {
  client.buttons.set(btn.categoryId, btn);
}

const registerEvents = () => {
  client.once(Events.ClientReady, (c) => {
    dbg(`Logged in as: ${c.user.tag}`);
    dbg('Listening...');
    setupPrayers(client);
    c.user.setActivity(CURRENT_STATUS, { type: ActivityType.Streaming });
  });

  client.on(Events.InteractionCreate, async (interaction) => {
    if (interaction.isButton()) {
      const [categoryId, payload] = interaction.customId.split('.');
      const btn = interaction.client.buttons.get(categoryId);
      if (!btn) {
        dbgErr(`No button matching ${categoryId} was found.`);
        return;
      }
      try {
        await btn.execute(interaction, payload);
      } catch (error) {
        handleError(interaction, error);
      }
    } else if (interaction.isChatInputCommand()) {
      const command = interaction.client.slashCommands.get(
        interaction.commandName
      );
      if (!command) {
        dbgErr(`No command matching ${interaction.commandName} was found.`);
        return;
      }
      try {
        await command.execute(interaction);
      } catch (error) {
        handleError(interaction, error);
      }
    }
  });
};

const handleError = async (
  interaction: ButtonInteraction | CommandInteraction,
  error: Error
) => {
  dbgErr(error);
  if (interaction.replied || interaction.deferred) {
    await interaction.followUp({
      content: 'There was an error while executing this command!',
      ephemeral: true,
    });
  } else {
    await interaction.reply({
      content: 'There was an error while executing this command!',
      ephemeral: true,
    });
  }
};

const launch = () => {
  registerEvents();
  client.login(process.env.DISCORD_TOKEN);
};

export default launch;
