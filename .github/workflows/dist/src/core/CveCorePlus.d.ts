/**
 *  CveCorePlus is made up of mostly the metadata portion of a CVE JSON 5 object
 *    (so everything in CveCore)
 *    plus things that are useful to store for various purposes (e.g., twitter):
 *      description from container.cna.description
 */
import { CveId } from './CveId.js';
import { CveCore } from './CveCore.js';
export { CveId } from './CveId.js';
export { CveCore } from './CveCore.js';
export declare class CveCorePlus extends CveCore {
    description?: string;
    /**
     * constructor which builds a minimum CveCore from a CveId or string
     * @param cveId a CveId or string
     */
    constructor(cveId: string | CveId);
    /**
     * builds a full CveCorePlus from a CveCore
     * @param cveCore a CveCore object
     * @returns a CveCorePlus object
     */
    static fromCveCore(cveCore: CveCore): CveCorePlus;
    updateFromLocalRepository(): boolean;
}
