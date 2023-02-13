import { Command } from 'commander';
import { GenericCommand } from './GenericCommand.js';
export declare class DumpCommand extends GenericCommand {
    constructor(program: Command);
    run(options: any): Promise<void>;
}
