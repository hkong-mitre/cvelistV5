import { Cve } from './Cve.js';
export interface CveApiOptions {
    id?: string;
    queryString?: string;
}
export declare class CveService {
    /** url to CVE services */
    _url: string;
    /** default header when sending requests to CVE services */
    headers: {
        "Content-Type": string;
        "CVE-API-ORG": string;
        "CVE-API-USER": string;
        "CVE-API-KEY": string;
        redirect: string;
    };
    /** returns the CVE with id
     *
     */
    getCveUsingId(id: string): Promise<Cve>;
    /** returns array of CVE that has been added/modified/deleted since timestamp window */
    getAllCvesChangedInTimeFrame(start: string, stop: string): Promise<Cve[]>;
    /** wrapper for /cve */
    cve(option: CveApiOptions): Promise<any>;
}
