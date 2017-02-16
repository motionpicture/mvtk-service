import * as CommonUtil from '../../../Common/Util/Util';

/**
 * ムビチケギフトカード取消out
 * @class
 */
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

    public static PARSE(resultObject: any): GiftCardCancelResult {
        const result = new GiftCardCancelResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            (<any>result)[normalizedName] = property;
        });
        return result;
    }
}
