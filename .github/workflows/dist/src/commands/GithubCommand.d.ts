import { Command } from 'commander';
import { GenericCommand } from './GenericCommand.js';
export declare class GithubCommand extends GenericCommand {
    constructor(program: Command);
    run(options: any): Promise<void>;
}
