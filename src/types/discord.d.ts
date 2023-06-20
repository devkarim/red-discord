import {
  SlashCommandBuilder,
  CommandInteraction,
  Collection,
  PermissionResolvable,
  Message,
  AutocompleteInteraction,
  ButtonInteraction,
} from 'discord.js';

export interface SlashCommand {
  command: SlashCommandBuilder;
  execute: (interaction: CommandInteraction) => Promise<void>;
  autocomplete?: (interaction: AutocompleteInteraction) => void;
  cooldown?: number; // in seconds
  category?: String;
}

export interface ButtonAction {
  categoryId: string;
  execute: (interaction: ButtonInteraction, payload: string) => Promise<void>;
}

declare module 'discord.js' {
  export interface Client {
    slashCommands: Collection<string, SlashCommand>;
    buttons: Collection<string, ButtonAction>;
    // commands: Collection<string, Command>;
    // cooldowns: Collection<string, number>;
  }
}
