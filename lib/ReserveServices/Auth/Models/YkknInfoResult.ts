import * as CommonUtil from '../../../Common/Util/Util';

/**
 * YkknInfo
 * @class
 */
export default class YkknInfoResult {
    /**
     * YKKNSH_TYP
     */
    public ykknshTyp: string;
    /**
     * EISHHSHK_TYP
     */
    public eishhshkTyp: string;
    /**
     * YKKN_KNSHBTSMI_NUM
     */
    public ykknKnshbtsmiNum: string;
    /**
     * KNSHKNHMBI_UNIP
     */
    public knshknhmbiUnip: string;
    /**
     * KIJ_UNIP
     */
    public kijUnip: string;

    /**
     * データ整形
     * @method
     */
    public static PARSE(resultObject: any): YkknInfoResult {
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
