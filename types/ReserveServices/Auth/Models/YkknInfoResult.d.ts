/**
 * YkknInfo
 * @class
 */
export default class YkknInfoResult {
    /**
     * YKKNSH_TYP
     */
    ykknshTyp: string;
    /**
     * EISHHSHK_TYP
     */
    eishhshkTyp: string;
    /**
     * YKKN_KNSHBTSMI_NUM
     */
    ykknKnshbtsmiNum: string;
    /**
     * KNSHKNHMBI_UNIP
     */
    knshknhmbiUnip: string;
    /**
     * KIJ_UNIP
     */
    kijUnip: string;
    /**
     * データ整形
     * @method
     */
    static PARSE(resultObject: any): YkknInfoResult;
}
