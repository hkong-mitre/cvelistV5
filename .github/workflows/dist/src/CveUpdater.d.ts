/**
 * Updates repository's
 *  - CVEs using CveService
 *  - release notes
 */
import { Cve } from './Cve.js';
import { Activity, ActivityOperation } from './core/ActivityLog.js';
import { ActivityOptions, ActivityLog } from './core/ActivityLog.js';
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
export declare class CveUpdater {
    /** repository base path */
    _repository_base: string;
    _release_note_path: string;
    _recent_activities_path: string;
    _activityLog: ActivityLog;
    constructor(activity: string, logOptions: ActivityOptions);
    /** writes to activity file */
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
    getFirstCvesFrame(startWindow: string, endWindow: string, max?: number, writeDir?: string): Promise<ActivityOperation>;
    /** retrieves the CVEs in a window of time
     *  @param startWindow requested start window, MUST BE ISO
     *  @param endWindow requested end window, MUST BE ISO
     *  @param max max records requested
     *             if the number of records in [startWindow,endWindow] > max, then endWindow is shortened until
     *             number of records < max
     *  @returns an Activity with data and properties OR
     *           null if params are detected to be a no-op
    */
    getCvesInWindow(startWindow: string, endWindow: string, max?: number, writeDir?: string): Promise<ActivityOperation[]>;
    /** retrieves all CVEs by page
     *  @param page requested page number
     *  @returns an Activity with data and properties OR
     *           null if params are detected to be a no-op
    */
    getCvesByPage(page: number, writeDir?: string): Promise<ActivityOperation>;
    /** reads recent activities data */
    readRecentActivities(): Activity[];
    /** write recent activities to file */
    writeRecentActivities(): void;
}
