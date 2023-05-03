import { CveId } from '../../../core/CveId.js';
import { IsoDateString } from '../../../common/IsoDateString.js';
import { CveCorePlus } from '../../../core/CveCorePlus.js';
export declare class CveTweetData {
    cveId: CveId;
    description: string;
    datePublished: IsoDateString | null;
    tweetText: string | null;
    tweeted: IsoDateString | null;
    /**
     * constructs a CveTweetData
     * @param cveId required CveId
     * @param description required full description text
     * @param datePublished optional date published
     * @param tweetText calculated or copied text to be tweeted
     * @param tweeted calcuated or copied timestamp when tweeted
     */
    constructor(cveId: CveId, description: string, datePublished?: IsoDateString, tweetText?: string, tweeted?: IsoDateString);
    static fromCveCorePlus(cvep: CveCorePlus): CveTweetData;
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
