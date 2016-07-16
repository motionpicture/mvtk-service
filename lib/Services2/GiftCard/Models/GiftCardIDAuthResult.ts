import CommonUtil from '../../../common/util/Util';

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

    public static parse (resultObject): GiftCardIDAuthResult {
        let result = new GiftCardIDAuthResult();

        for (let propertyName in resultObject) {
            let normalizedName = CommonUtil.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];

            result[normalizedName] = property;
        }

        return result;
    }
}
