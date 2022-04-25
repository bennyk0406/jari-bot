import { Client } from 'discord.js';
import { EventData } from '../types';

export const event: EventData = {
	name: 'ready',
	once: true,
	execute(client: Client<true>) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
	}
};