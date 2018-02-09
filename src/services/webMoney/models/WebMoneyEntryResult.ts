import { Util } from '../../../common/util/Util';

/**
 * WebMoneyEntryResult
 */
export class WebMoneyEntryResult {
    public rdirktUrl: string; // リダイレクトURL

    public static parse(resultObject: any): WebMoneyEntryResult {
        const result = new WebMoneyEntryResult();

        for (const propertyName in resultObject) {
            const normalizedName = Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            (<any>result)[normalizedName] = property;
        }

        return result;
    }
}
