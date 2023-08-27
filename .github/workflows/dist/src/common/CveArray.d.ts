export interface CveItem {
    cveId: string;
}
export declare class CveArray extends Array<CveItem> {
    pushNoRepeat(item: CveItem, overwrite?: boolean): number;
}
