/**
 *  Twitter activities using Twitter API v2.0
 *
 *  twitter.json is of the format described in TwitterLog.ts.
 *
 *  The file is trimmed to the last process.env.TWITTER_JSON_KEEP_MINS
 *    - to prevent retweeting the same CVE
 *    - have a large enough buffer in case github actions fail
 */
import { InlineErrorV2 } from 'twitter-api-v2';
import { IsoDateString } from '../../../common/IsoDateString.js';
import { CveTweetData } from './CveTweetData.js';
import { CveId } from '../../../core/CveRecord.js';
export interface TwitterResp {
    id: string;
    text: string;
    errors: InlineErrorV2[];
}
export declare class TwitterManager {
    static credentials: {
        appKey: string;
        appSecret: string;
        accessToken: string;
        accessSecret: string;
    };
    static __cveUrl: string;
    static __accountId: string;
    /** constructor */
    private constructor();
    static tweetNewCves(useLogOnly?: boolean): Promise<number>;
    /**
     * using an array of CVE IDs, tweet the respective CVEs with whatever necessary data is available
     * Note that, unlike tweetNew(), this function is for admins, and it will tweet any specified CVE ID
     * even if nomally under tweetNew() it would not be eligible to be tweeted (e.g, if the state is REJECTED)
     * @param ids array of strings representing CVE IDs
     * @returns number CVEs tweeted
     */
    static tweetCveUsingCveId(id: string): Promise<void>;
    static setTweeterLogDate(date: IsoDateString): Promise<IsoDateString>;
    /**
     *
     * @param content string to include in tweeet.
     *                Note that this will automatically be trimmed to fit Twitter's text size
     *                along with additional data required by the CVE tweet message
     * @returns
     */
    static tweet(content: string): Promise<TwitterResp>;
    /**
     *
     * @param content string to include in tweeet.
     *                Note that this will automatically be trimmed to fit Twitter's text size
     *                along with additional data required by the CVE tweet message
     * @returns
     */
    static showLimits(): Promise<void>;
    /**
     *
     * @param dateString ISO date string, but only the date portion will be used
     * @returns collection of CveTweetData
     */
    static getRecentTweetsOnDate(dateString: string): Promise<CveTweetData[]>;
    /**
     *
     * @param content string to include in tweeet.
     *                Note that this will automatically be trimmed to fit Twitter's text size
     *                along with additional data required by the CVE tweet message
     * @returns
     */
    static getMyTwitterInfo(): Promise<void>;
    static findUntweeted(start: IsoDateString, stop: IsoDateString, dir: string): Promise<CveTweetData[]>;
    static calculateNewCves(newCves?: any, tweetedCves?: any): Promise<CveId[]>;
    static removeFromNew(cveids: string): Promise<string[]>;
}
