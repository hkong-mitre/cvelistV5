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
    /** constructor */
    constructor();
    tweet(content: string): Promise<TwitterResp>;
    /** writes the delta to a JSON file
     *  @param relFilepath relative path from current directory (default is current directory)
     */
    writeFile(relFilepath?: string): void;
}
