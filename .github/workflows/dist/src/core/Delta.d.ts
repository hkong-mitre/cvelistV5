/**
 *  Delta object, calculates deltas in current activity
 */
import { CveCore } from './CveCore.js';
export declare type IsoDate = string;
export declare type CveId = string;
export interface DeltaProps {
    numDelta?: number;
    new?: CveCore[];
    published?: CveCore[];
    updated?: CveCore[];
    unknown?: CveCore[];
}
export declare enum DeltaQueue {
    kNew = 1,
    kPublished = 2,
    kUpdated = 3,
    kUnknown = 4
}
export declare class Delta implements DeltaProps {
    numDelta: number;
    published: CveCore[];
    new: CveCore[];
    updated: CveCore[];
    unknown: CveCore[];
    debugPublished: string[];
    debugUpdated: string[];
    constructor(prevDelta?: DeltaProps);
    static getCveIdMetaData(path: string): [string | undefined, string | undefined];
    static calculateDelta(prevDelta: DeltaProps, dir: string): Promise<Delta>;
    /**
     * pure function:  given origQueue, this will either add cve if it is not already in origQueue
     * or replace the original in origQueue with cve
     * @param cve the CVE to be added/replaced
     * @param origQueue the original queue
     * @returns a typle:
     *    [0] is the new queue (with the CVE either added or replaced)
     *    [1] either 0 if CVE is replaced, or 1 if new, intended to be += to this.numDelta
     */
    private _addOrReplace;
    /** calculates the numDelta property
     * @returns the total number of deltas in all the queues
     */
    calculateNumDelta(): number;
    add(cve: CveCore, queue: DeltaQueue): void;
}
