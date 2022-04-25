import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';
import { CommandData } from '../types';

export const command: CommandData = {
	data: new SlashCommandBuilder()
		.setName('authority')
		.setDescription('Calculate the fame of your postcards of authority.')
        .addNumberOption(option => 
            option.setName('fame')
                .setDescription('Your fame.')
                .setRequired(true)),
	async execute(interaction: CommandInteraction) {
        const input = interaction.options.data[0].value as number;
        if (Math.floor(input) !== input || input < 1) {
            await interaction.reply("Please enter a natural number.");
        }
		await interaction.reply(`The fame is -${Math.floor(input * 0.015) + 20}.`);
	}
};