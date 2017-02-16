import * as CommonUtil from '../../../Common/Util/Util';

/**
 * WebMoney決済実行out
 * @class
 */
export default class WebMoneyEntryResult {
    public rdirktUrl: string; // リダイレクトURL

    public static PARSE(resultObject: any): WebMoneyEntryResult {
        const result = new WebMoneyEntryResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            (<any>result)[normalizedName] = property;
        });
        return result;
    }
}
