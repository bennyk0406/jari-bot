import { Collection } from 'discord.js';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { CommandData } from './types';

export const registeredCommands = new Collection(
    readdirSync(join(__dirname, './commands')).filter(fileName => fileName.endsWith('.ts')).map(fileName =>
        (
            (command: CommandData) => [ command.data.name, command ]
        )(require(join(__dirname, `./commands/${fileName}`)).command as CommandData)
    )
);