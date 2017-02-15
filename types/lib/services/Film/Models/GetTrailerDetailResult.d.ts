/**
 * 予告編取得
 * @class
 */
export default class GetTrailerDetailResult {
    skhnCd: string;
    ykkhnInfo: YkkhnInfo[];
    static PARSE(resultObject: any): GetTrailerDetailResult;
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
