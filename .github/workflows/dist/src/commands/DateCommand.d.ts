import { Command } from 'commander';
import { GenericCommand } from './GenericCommand.js';
export declare class DateCommand extends GenericCommand {
    constructor(name: string, program: Command);
    run(options: any): Promise<void>;
}
