import 'dotenv/config';

import { REST, Routes } from 'discord.js';
import ALL_SLASH_COMMANDS from '../src/commands';

const commands = [];

for (const cmd of ALL_SLASH_COMMANDS) {
  commands.push(cmd.command.toJSON());
}

const rest = new REST().setToken(process.env.DISCORD_TOKEN);
(async () => {
  try {
    console.log(
      `Started refreshing ${commands.length} application (/) commands.`
    );

    // The put method is used to fully refresh all commands in the guild with the current set
    const data = await rest.put(
      Routes.applicationGuildCommands(
        process.env.DISCORD_CLIENT_ID,
        process.env.DISCORD_DEV_GUILD_ID
      ),
      { body: commands }
    );

    // The put method is used to fully refresh all commands in all guilds with the current set
    // const data = await rest.put(
    //   Routes.applicationCommands(
    //     process.env.DISCORD_CLIENT_ID,
    //   ),
    //   { body: commands }
    // );

    console.log(
      `Successfully reloaded ${(data as any).length} application (/) commands.`
    );
  } catch (error) {
    console.error(error);
  }
})();
