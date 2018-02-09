/**
 * 予告編取得out
 */
export declare class GetTrailerDetailResult {
    skhnCd: string;
    ykkhnInfo: YkkhnInfo[];
    /**
     * データ整形
     */
    static parse(resultObject: any): GetTrailerDetailResult;
}
/**
 * YkkhnInfo
 */
export interface YkkhnInfo {
    YKKHN_NO: string;
    DVC_TYP: string;
    YKKHN_TTL: string;
    YKKHN_URL: string;
}
