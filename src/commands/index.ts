import { SlashCommand } from '../types/discord';
import adminCmds from './admin';
import helloCmd from './misc/hello';
import helpCmd from './misc/help';

const ALL_SLASH_COMMANDS: SlashCommand[] = [helloCmd, helpCmd, ...adminCmds];

export default ALL_SLASH_COMMANDS;
