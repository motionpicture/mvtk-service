import CommonUtil from '../../../common/util/Util';

export default class GiftCardCancelResult {
    /**
     * 凸版サービス返却値
     */
    public tppnsrvcrspns: string = '';
    /**
     * ムビチケギフトカードID
     */
    public mvtkgftcrdId: string = '';
    /**
     * 利用前残高
     */
    public ryumezndk: string = '';
    /**
     * 残高
     */
    public zndk: string = '';
    /**
     * 承認番号
     */
    public synnNo: string = '';
    /**
     * 処理要求日時
     */
    public syrykyDt: string = '';
    /**
     * ギフトカードステータス
     */
    public giftcardstatus: string = '';

    public static parse (resultObject): GiftCardCancelResult {
        let result = new GiftCardCancelResult();

        for (let propertyName in resultObject) {
            let normalizedName = CommonUtil.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];

            result[normalizedName] = property;
        }

        return result;
    }
}
