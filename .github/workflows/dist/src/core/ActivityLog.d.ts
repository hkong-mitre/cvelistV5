/**
 *  Activity logs
 */
export interface ActivityError {
    [key: string]: string;
}
export interface ActivityNotes {
    [key: string]: string;
}
export interface ActivityAction {
    startTime: string;
    stopTime: string;
    duration: string;
    type: `github` | `manual`;
    name: string;
    url?: string;
    "action-op": {
        status: `complete` | `failed`;
        errors?: ActivityError[];
        notes?: ActivityNotes;
    };
}
export interface ActivityOperation {
    activity: string;
    timestamp: string;
    duration: string;
    summary: {
        startWindow?: string;
        endWindow?: string;
        page?: number;
        count: number;
        cveIds?: string[];
    };
}
export interface Activity extends ActivityOperation {
}
export interface ActivityOptions {
    path?: string;
    filename?: string;
    logCurrentActivity?: boolean;
    logAlways?: boolean;
    logKeepPrevious?: boolean;
}
export declare class ActivityLog {
    _options: ActivityOptions;
    _fullpath: string;
    _activities: Activity[];
    constructor(options: ActivityOptions);
    clearActivities(): void;
    prepend(activity: Activity): Activity[];
    writeRecentFile(): void;
    /** reads in the recent activities into _activities */
    static readFile(relFilepath: string): Activity[];
    /** writes to activity file */
    static writeFile(relFilepath: string, body: string): void;
}
