import CommonUtil from '../../../Common/Util/Util';

export default class WebMoneyEntryResult {
    public rdirktUrl: string; // リダイレクトURL

    public static parse (resultObject): WebMoneyEntryResult {
        let result = new WebMoneyEntryResult();

        for (let propertyName in resultObject) {
            let normalizedName = CommonUtil.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];

            result[normalizedName] = property;
        }

        return result;
    }
}
