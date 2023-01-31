/**
 * Updates repository's
 *  - CVEs using CveService
 *  - release notes
 */
import { Cve } from './Cve.js';
/** data structure returned from getFirstCvesFrame */
export interface ModifiedCvesRequest {
    startWindow: string;
    endWindow?: string;
    countOnly?: boolean;
    state?: 'PUBLISHED' | 'REJECTED';
    fastForward?: boolean;
    queryString: string;
}
/** data structure returned from getFirstCvesFrame */
export interface ModifiedCvesResponse {
    startWindow: string;
    endWindow: string;
    count: number;
    cves: Cve[];
    queryString: string;
}
/** data structure returned from getFirstCvesFrame */
export interface ModifiedCvesResponse {
    startWindow: string;
    endWindow: string;
    count: number;
    cves: Cve[];
    queryString: string;
}
export declare const kActivity_UpdateByModificationDateWindow = "UPDATE_BY_MODIFICATION_DATE_WINDOW";
export declare const kActivity_UpdateByPage = "UPDATE_BY_PAGE";
export interface RecentActivity {
    timestamp: string;
    duration: string;
    activity: string;
    summary: {
        startWindow?: string;
        endWindow?: string;
        page?: number;
        count: number;
        cveIds: string[];
    };
}
export declare class CveUpdater {
    /** repository base path */
    _repository_base: string;
    _release_note_path: string;
    _recent_activities_path: string;
    _previous_activities: RecentActivity[];
    constructor(activity: string);
    /** writes to activity file */
    static writeActivityFile(relFilepath: string, body: string): void;
    /** gets the current timestamp  */
    timestamp(humanReadable?: boolean): string;
    /** retrieves the CVEs in a window of time
     *  @param startWindow requested start window, MUST BE ISO
     *  @param endWindow requested end window, MUST BE ISO
     *  @param max max records requested
     *             if the number of records in [startWindow,endWindow] > max, then endWindow is shortened until
     *             number of records < max
     *  @returns an Activity with data and properties OR
     *           null if params are detected to be a no-op
     *
     *  @todo NOTE that there is a known bug at present, where if there were > max records that were changed in less than 1 second
     *  this will go into an endless loop
    */
    getFirstCvesFrame(startWindow: string, endWindow: string, max?: number, writeDir?: string): Promise<RecentActivity>;
    /** retrieves the CVEs in a window of time
     *  @param startWindow requested start window, MUST BE ISO
     *  @param endWindow requested end window, MUST BE ISO
     *  @param max max records requested
     *             if the number of records in [startWindow,endWindow] > max, then endWindow is shortened until
     *             number of records < max
     *  @returns an Activity with data and properties OR
     *           null if params are detected to be a no-op
    */
    getCvesInWindow(startWindow: string, endWindow: string, max?: number, writeDir?: string): Promise<RecentActivity[]>;
    /** retrieves all CVEs by page
     *  @param page requested page number
     *  @returns an Activity with data and properties OR
     *           null if params are detected to be a no-op
    */
    getCvesByPage(page: number, writeDir?: string): Promise<RecentActivity>;
    /** reads recent activities data */
    readRecentActivities(): RecentActivity[];
    /** write recent activities to file
     *  @param clear optional boolean to clear the recent_activities.json file before writing
     */
    writeRecentActivities(clear?: boolean): void;
}
