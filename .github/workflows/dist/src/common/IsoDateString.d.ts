/** Class representing a strongly opinionated ISO Date+Time+TZ string with utils
 *  Note that this class was written to be very opinionated. See IsoDateString.test.ts for properly formatted
 *    and improperly formatted strings.  In general, the output of Date.toISOString() is
 *    the preferred format, with some exceptions as noted in IsoDateString.test.ts
 *
 *  Note that in the future, if necessary, we can extend what this class covers, but for now
 *    this strict and opinionated set is very useful for processing ISO Date+Time+TZ strings
 */
export declare const IsoDateStringRegEx: RegExp;
export declare class IsoDateString {
    _isoDateString: string;
    /** returns a IsoDateString object iff isoDateStr is a properly formatted ISO Date+Time+TZ string,
     *  or if a string is not specified, then this will create a IsoDateString of "now" using new Date()
     *  @param isoDateStr a properly formatted ISO Date+Time+TZ string (defaults to now)
     *  @param assumeZ set to true if want to assume a trailing Z for GMT/Zulu time zone (default is false)
     *                 this is needed because CVEs timestamps may be missing the timezone, and we are assuming it to be GMT
     */
    constructor(isoDateStr?: string, assumeZ?: boolean);
    /** returns the number of characters in the string representation */
    length(): number;
    /** returns the string representation */
    toString(): string;
    /** properly outputs the object in JSON.stringify() */
    toJSON(): string;
    /** returns a JS Date object from the string representation */
    toDate(): Date;
    /** strict testing of a string for being a valid ISO Date+Time+TZ string  */
    static isIsoDateString(str: string): boolean;
    /**
     * return a new IsoDateString that is minutes ago or since
     * @param minutes positive number to minutes ago, negative number for minutes since
     * @returns a new IsoDateString that is specified minutes ago or since
     */
    minutesAgo(minutes: number): IsoDateString;
}
