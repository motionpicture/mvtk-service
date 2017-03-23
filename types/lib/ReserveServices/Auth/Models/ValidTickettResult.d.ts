/**
 * 有効券情報
 * @class ValidTickettResult
 */
export default class ValidTickettResult {
    /**
     * 有効券種区分
     */
    ykknshTyp: string;
    /**
     * 映写方式区分
     */
    eishhshkTyp: string;
    /**
     * 有効券種別枚数
     */
    ykknKnshbtsmiNum: string;
    /**
     * 鑑賞券販売単価
     */
    knshknhmbiUnip: string;
    /**
     * 計上単価
     */
    kijUnip: string;
    /**
     * データ整形
     *
     * @param {any} resultObject
     * @returns {ValidTickettResult} ValidTickettResultout
     */
    static parse(resultObject: any): ValidTickettResult;
}
