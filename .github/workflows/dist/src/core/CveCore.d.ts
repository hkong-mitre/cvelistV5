/**
 *  CveCore is the metadata portion of a CVE JSON 5 object
 *  Eventually, this will be renamed CveMetadata, but since that name is already used
 *  by the generated Cve5, we are using CveCore for now
 */
import { Cve } from '../Cve.js';
export declare type IsoDate = string;
export declare type CveId = string;
export declare class CveCore {
    cveId: CveId;
    state?: string;
    assignerOrgId?: string;
    assignerShortName?: string;
    dateReserved?: IsoDate;
    datePublished?: IsoDate;
    dateUpdated?: IsoDate;
    constructor(cveId: CveId);
    static fromCveMetadata(metadata: Partial<CveCore>): CveCore;
    static fromCve(cve: Cve): CveCore;
    toJson(whitespace?: number): string;
}
