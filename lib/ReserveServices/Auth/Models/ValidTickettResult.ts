import * as CommonUtil from '../../../Common/Util/Util';

/**
 * 有効券情報
 * @class ValidTickettResult
 */
export default class ValidTickettResult {
    /**
     * 有効券種区分
     */
    public ykknshTyp: string;
    /**
     * 映写方式区分
     */
    public eishhshkTyp: string;
    /**
     * 有効券種別枚数
     */
    public ykknKnshbtsmiNum: string;
    /**
     * 鑑賞券販売単価
     */
    public knshknhmbiUnip: string;
    /**
     * 計上単価
     */
    public kijUnip: string;

    /**
     * データ整形
     *
     * @param {any} resultObject
     * @returns {ValidTickettResult} ValidTickettResultout
     */
    // tslint:disable-next-line:function-name
    public static parse(resultObject: any): ValidTickettResult {
        const result = new ValidTickettResult();
        Object.keys(resultObject).forEach((value) => {
            const propertyName = value;
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            (<any>result)[normalizedName] = property;
        });

        return result;
    };

}
