import { SlashCommandBuilder } from '@discordjs/builders';
import { Client, ClientEvents, Interaction } from 'discord.js';

export interface CommandData {
    data: SlashCommandBuilder | Omit<SlashCommandOptionsOnlyBuilder, '_sharedAddOptionMethod'>;
    execute(interaction: CommandInteraction): void;
}

export interface EventData {
    name: string;
    execute(_client: Client, ...args: ClientEvents[keyof ClientEvents]): void;
    once?: boolean;
}