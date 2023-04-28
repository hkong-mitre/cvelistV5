/**
 *  Twitter activities using Twitter API v2.0
 *
 *  twitter.json is of the format:
 *  {
 *    "last_activity_sync_timestamp": "timestamp",
 *    "last_successful_tweet_timestamp": "timestamp",
 *    "publish date": [
 *      {
 *        "CVE ID": {
 *          "description": "...",
 *          "tweeted": "" | "tweet time stamp"
 *        }
 *      }
 *    ]
 *  }
 *
 *  The file is trimmed to the last process.env.TWITTER_JSON_KEEP_MINS
 *    - to prevent retweeting the same CVE
 *    - have a large enough buffer in case github actions fail
 */
import { CveId } from '../../../core/CveId.js';
import { IsoDateString } from '../../../common/IsoDateString.js';
import { CveTweetData } from './CveTweetData.js';
export interface TwitterResp {
    id: string;
    text: string;
}
export declare class TwitterManager {
    credentials: {
        appKey: string;
        appSecret: string;
        accessToken: string;
        accessSecret: string;
    };
    static __cveUrl: string;
    /** constructor */
    constructor();
    /**
     * Builds a CveTweetData object out of the parameters provided, including
     * the trimmed version of the tweet text, built from the parameters
     * @param cveId the CVE ID
     * @param description the CVE description
     * @param datePublished the published date of the CVE
     * @returns a new CveTweetData ready to be tweeted
     */
    static buildCveTweetData(cveId: CveId, description: string, datePublished: IsoDateString): CveTweetData;
    tweetNewCves(): Promise<number>;
    /**
     *
     * @param content string to include in tweeet.
     *                Note that this will automatically be trimmed to fit Twitter's text size
     *                along with additional data required by the CVE tweet message
     * @returns
     */
    tweet(content: string): Promise<TwitterResp>;
}
