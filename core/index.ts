import {
  ApplicationCommandDataResolvable,
  Client,
  ClientApplication,
  CommandInteraction,
  Guild,
  GuildMember,
  Interaction,
  Message,
  TextChannel,
  User,
} from 'discord.js';
import fs from 'fs';

import { ICallbackObject } from './models/ICallbackObject';
import { ICommand } from './models/ICommand';
import { Options } from './models/Options';
import commandController from './src/command.controller';
import EventController from './src/event.controller';

export default class BotController {
  options: Options;
  constructor(client: Client, options: Options) {
    this.options = options;
    commandController(options, client, this);
    EventController(client, options);
  }

  private async destroyAllCommands(client: Client): Promise<void> {
    const app = await client.application?.fetch();

    // app?.commands.set([]);
    const commands = await app?.commands.fetch();

    commands?.forEach((command) => {
      // command.delete();
      console.log(command.name);
    });
  }
}
