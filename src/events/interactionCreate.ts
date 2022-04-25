import { Client, CommandInteraction } from 'discord.js';

import { registeredCommands } from '../registeredCommands';
import { EventData } from '../types';

export const event: EventData = {
	name: 'interactionCreate',
	async execute(_client: Client, interaction: CommandInteraction) {
        if (!interaction.isCommand()) return;
        
        const command = registeredCommands.get(interaction.commandName);
        if (!command) return;
        
        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: '명령어 처리 중 오류가 발생했습니다!', ephemeral: true });
        };
	}
};