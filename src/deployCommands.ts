import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { clientId, token } from '../config.json';

import { registeredCommands } from './registeredCommands';
const commands = [...registeredCommands.values()].map(command => command.data.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationCommands(clientId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);