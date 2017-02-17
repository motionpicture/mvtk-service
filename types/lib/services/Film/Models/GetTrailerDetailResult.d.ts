/**
 * 予告編取得out
 * @class
 */
export default class GetTrailerDetailResult {
    skhnCd: string;
    ykkhnInfo: YkkhnInfo[];
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {GetTrailerDetailResult} 予告編取得out
     */
    static parse(resultObject: any): GetTrailerDetailResult;
}
/**
 * YkkhnInfo
 * @interface
 */
export interface YkkhnInfo {
    YKKHN_NO: string;
    DVC_TYP: string;
    YKKHN_TTL: string;
    YKKHN_URL: string;
}
