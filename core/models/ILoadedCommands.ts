import BotController from '..';
import { ICommand } from './ICommand';
export interface ILoadedCommands {
  [key: string]: {
    iComand: ICommand;
    instance: BotController
  };
}
