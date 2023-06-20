import { SlashCommand } from '../types/discord';
import adminCmds from './admin';
import helloCmd from './misc/hello';

const ALL_SLASH_COMMANDS: SlashCommand[] = [helloCmd, ...adminCmds];

export default ALL_SLASH_COMMANDS;
