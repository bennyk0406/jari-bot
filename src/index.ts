import { Client, ClientEvents, Intents } from 'discord.js';
import { token } from '../config.json';
import { EventData } from './types';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const eventFiles = readdirSync(join(__dirname, './events')).filter(fileName => fileName.endsWith('.ts'));

for (const file of eventFiles) {
	const event: EventData = require(`./events/${file}`).event;
	if (event.once) {
		client.once(event.name, (...args) => 
			event.execute(client, ...args as ClientEvents[keyof ClientEvents])
		);
	} else {
		client.on(event.name, (...args) =>
			event.execute(client, ...args as ClientEvents[keyof ClientEvents])
		);
	};
};

client.login(token);