import * as CommonUtil from '../../../Common/Util/Util';

/**
 * ムビチケギフトカード認証out
 * @class
 */
export default class GiftCardIDAuthResult {
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

    // tslint:disable-next-line:function-name
    public static parse(resultObject: any): GiftCardIDAuthResult {
        const result = new GiftCardIDAuthResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            (<any>result)[normalizedName] = property;
        });

        return result;
    }
}
