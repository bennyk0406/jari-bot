import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';
import { CommandData } from '../types';

export const command: CommandData = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction: CommandInteraction) {
        const interactionTime = interaction.createdAt.getTime();
        const nowTime = new Date().getTime();
		await interaction.reply(`Pong! (${nowTime - interactionTime}ms)`);
	}
};