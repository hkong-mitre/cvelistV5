import { CveId } from '../../../core/CveId.js';
import { CveCorePlus } from '../../../core/CveCorePlus.js';
import { IsoDateString } from '../../../common/IsoDateString.js';
export declare class CveTweetData {
    /** cveId is the only required field.  When reading tweets from twitter using the Twitter API, it needs
     *  to be rebuilt by fromTwitterApi() because it is encapsulated in Twitter's "text" field */
    cveId: CveId;
    state?: string;
    datePublished: IsoDateString | undefined;
    tweeted: IsoDateString | undefined;
    private _description;
    get description(): string;
    set description(str: string);
    /** tweetText is optional.  It is built when tweeting a new CVE (using buildTweetText()), and it is
     *  returned verbatim from Twitter API's "text" field when reading tweeted CVEs
     */
    private _tweetText?;
    /** returns the tweet text */
    get tweetText(): string;
    /** sets the tweetText, overwriting what was already built in the constructor
     * @param str the tweet text
     */
    set tweetText(str: string);
    /** the ID that twitter assigns */
    twitter_id?: string;
    /** boolean set to
     *    false (default) if built from CVE data
     *    true if the CveTweetData was built from a query to twitter
     */
    builtFromTwitter: boolean;
    cveIdOnly(): boolean;
    static hasCveIdOnly(obj: any): boolean;
    buildTweetText(): string;
    detail: CveCorePlus;
    /**
     * constructs a CveTweetData
     * @param cveId required CveId object or CVE ID string
     * @param description optional full description text
     * @param datePublished optional date published
     * @param tweetText optional calculated or copied text to be tweeted
     * @param tweeted optional calcuated or copied timestamp when tweeted
     */
    constructor(cveId: CveId | string, description?: string, datePublished?: IsoDateString | undefined, tweetText?: string, tweeted?: IsoDateString, state?: string, //"RESERVED" | "PUBLISHED" | "REJECTED"
    twitter_id?: string, builtFromTwitter?: boolean);
    static fromJson(json: unknown): CveTweetData;
    /** builds a CveTweetData from a CveCorePlus object */
    static fromCveCorePlus(cvep: CveCorePlus): CveTweetData;
    /** returns a full CveTweetData object given a CVE ID string
     *  @param cveid a string representation of the CVE ID
     */
    static fromCveIdString(cveid: string): CveTweetData;
    /**
     * Builds a CveTweetData object out of the parameters provided, including
     * the trimmed version of the tweet text, built from the parameters
     * @param cveId the CVE ID
     * @param description the CVE description
     * @param datePublished the published date of the CVE
     * @returns a string ready to be tweeted
     */
    static buildCveTweetText(cveId: CveId, description: string, datePublished: IsoDateString): string;
    toJSON(): {
        cveId: string;
        description: string;
        datePublished: string;
        state: string;
        tweetText: string;
        tweeted: string;
        twitter_id: string;
        builtFromTwitter: boolean;
    };
    /**
     * returns true iff this.tweeted is set
     */
    isTweeted(): boolean;
    /**
     * sets the tweeted property to the current date
     */
    setTweeted(): IsoDateString;
}
