import * as CommonUtil from '../../../Common/Util/Util';

/**
 * YkknInfoResultout
 * @class YkknInfoResult
 */
export default class YkknInfoResult {
    /**
     * YKKNSH_TYP
     */
    public ykknshTyp: string;
    /**
     * 映写方式区分
     */
    public eishhshkTyp: string;
    /**
     * YKKN_KNSHBTSMI_NUM
     */
    public ykknKnshbtsmiNum: string;
    /**
     * 鑑賞券販売単価
     */
    public knshknhmbiUnip: string;
    /**
     * KIJ_UNIP
     */
    public kijUnip: string;

    /**
     * データ整形
     *
     * @param {any} resultObject
     * @returns {YkknInfoResult} YkknInfoResultout
     */
    // tslint:disable-next-line:function-name
    public static parse(resultObject: any): YkknInfoResult {
        const result = new YkknInfoResult();
        Object.keys(resultObject).forEach((value) => {
            const propertyName = value;
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            (<any>result)[normalizedName] = property;
        });

        return result;
    };

}
