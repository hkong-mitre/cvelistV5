import { CveId } from '../../../core/CveId.js';
import { CveCorePlus } from '../../../core/CveCorePlus.js';
import { IsoDateString } from '../../../common/IsoDateString.js';
export declare class CveTweetData {
    cveId: CveId;
    datePublished: IsoDateString | undefined;
    tweeted: IsoDateString | undefined;
    private _description;
    get description(): string;
    set description(str: string);
    private _tweetText;
    /** buld the tweetText iff one has not already been set */
    get tweetText(): string;
    set tweetText(str: string);
    /**
     * constructs a CveTweetData
     * @param cveId required CveId
     * @param description required full description text
     * @param datePublished optional date published
     * @param tweetText calculated or copied text to be tweeted
     * @param tweeted calcuated or copied timestamp when tweeted
     */
    constructor(cveId: CveId, description?: string, datePublished?: IsoDateString, tweetText?: string, tweeted?: IsoDateString);
    static fromCveCorePlus(cvep: CveCorePlus): CveTweetData;
    /**
     * Builds a CveTweetData object out of the parameters provided, including
     * the trimmed version of the tweet text, built from the parameters
     * @param cveId the CVE ID
     * @param description the CVE description
     * @param datePublished the published date of the CVE
     * @returns a new CveTweetData ready to be tweeted
     */
    static buildCveTweetData(cveId: CveId, description: string, datePublished: IsoDateString): CveTweetData;
    toJson(): {
        cveId: CveId;
        description: string;
        datePublished: string;
        tweetText: string;
        tweeted: string;
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
