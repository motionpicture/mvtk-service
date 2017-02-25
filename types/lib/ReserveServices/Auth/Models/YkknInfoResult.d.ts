/**
 * YkknInfoResultout
 * @class YkknInfoResult
 */
export default class YkknInfoResult {
    /**
     * YKKNSH_TYP
     */
    ykknshTyp: string;
    /**
     * 映写方式区分
     */
    eishhshkTyp: string;
    /**
     * YKKN_KNSHBTSMI_NUM
     */
    ykknKnshbtsmiNum: string;
    /**
     * 鑑賞券販売単価
     */
    knshknhmbiUnip: string;
    /**
     * KIJ_UNIP
     */
    kijUnip: string;
    /**
     * データ整形
     *
     * @param {any} resultObject
     * @returns {YkknInfoResult} YkknInfoResultout
     */
    static parse(resultObject: any): YkknInfoResult;
}
