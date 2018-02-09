import { Util } from '../../../common/util/Util';

/**
 * GiftCardIDAuthResult
 */
export class GiftCardIDAuthResult {
    /**
     * 凸版サービス返却値
     */
    public tppnsrvcrspns: string = '';
    /**
     * ムビチケギフトカードID
     */
    public mvtkgftcrdId: string = '';
    /**
     * 残高
     */
    public zndk: string = '';
    /**
     * 利用金額
     */
    public ryukngk: string = '';
    /**
     * ギフトカードステータス
     */
    public giftcardstatus: string = '';
    /**
     * 他決済利用金額
     */
    public tkssiryukngk: string = '';

    public static parse(resultObject: any): GiftCardIDAuthResult {
        const result = new GiftCardIDAuthResult();

        for (const propertyName in resultObject) {
            const normalizedName = Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            (<any>result)[normalizedName] = property;
        }

        return result;
    }
}
