import { IsoDateString } from '../../../common/IsoDateString.js';
import { CveTweetData } from './CveTweetData.js';
export declare class TwitterLog {
    static kFilename: string;
    filepath: string;
    newCves: CveTweetData[];
    tweetedCves: CveTweetData[];
    private _last_successful_tweet_timestamp;
    get last_successful_tweet_timestamp(): IsoDateString;
    private set last_successful_tweet_timestamp(value);
    private constructor();
    /** reads in the recent activities into _activities */
    static fromLogfile(relFilepath?: string): TwitterLog;
    /** using Git and TwitterLog.kFilename, build up a new TwitterLog
     * @param start git log start time window
     * @param stop git log stop time window (defaults to now)
     * @param repository directory to get git info from (defaults to process.env.CVES_BASE_DIRECTORY)
     * @param twitterLogfile the path to the twitterlog file (defaults to TwitterLog.kFilename)
     */
    static fromGit(twitterLogfile?: string, repository?: string, start?: string, stop?: string): Promise<TwitterLog>;
    /**
     * adds a CveTweetData to the newCves queue iff it is not already in
     *  either the newCves nor the tweetedCves queues
     * @param data a CveTweetData object
     */
    addToNew(data: CveTweetData): void;
    /** adds data to the tweeted list
     *  Note that this can cause multiple instances of the same CVE, as this is useful for debugging
     * @param data the CveTweetData to be added to the list
     * @param allowRepeats boolean to enable/disable repeats in the tweeted list, useful for debugging use of twitter API, defaults to true
     * @param fromTwitter optionally set the CveTweetData.builtFromTwitter flag
    */
    addToTweeted(data: CveTweetData | CveTweetData[], allowRepeats?: boolean, fromTwitter?: boolean): void;
    /**
     * returns the first newCve, BUT DOES NOT REMOVE IT in case the tweet failed
     */
    nextNew(): CveTweetData;
    /**
     * removes cveids from the new list
     * @param cveids a single CVE ID string, or array of CVE ID string, or null, or undefined
     */
    removeNew(cveids: string | string[]): void;
    /**
     * adds data to tweetedCves list, and removes it from the newCves list
     * @param data the CveTweetData that was successfully tweeted
     */
    pushAsTweeted(data: CveTweetData): void;
    /**
     * cleans up the log:
     * 1. reverse chronologically orders tweetedCves
     * 2. truncates any tweetedCves older than timestamp
     * 3. removes from newCves any CVE that are already in tweetedCves
     * @param timestamp the ISO timestamp before which CVEs tweeted will be removed
     */
    cleanup(timestamp?: IsoDateString): void;
    /**
     * resets the 'last_successful_tweet_timestamp' to the specified ISO date
     */
    setLogDate(date?: IsoDateString): void;
    /** properly outputs this object in JSON.stringify() */
    toJSON(): {
        last_successful_tweet_timestamp: string;
        newCves: CveTweetData[];
        tweetedCves: CveTweetData[];
    };
    /** writes to TwitterLog.kFilename file
     *  @param relFilepath path to write to, defaults to the same filepath that was read from
     */
    writeLogfile(relFilepath?: string): void;
}
