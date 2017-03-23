/**
 * ムビチケギフトカード認証out
 * @class
 */
export default class GiftCardIDAuthResult {
    /**
     * 凸版サービス返却値
     */
    tppnsrvcrspns: string;
    /**
     * ムビチケギフトカードID
     */
    mvtkgftcrdId: string;
    /**
     * 残高
     */
    zndk: string;
    /**
     * 利用金額
     */
    ryukngk: string;
    /**
     * ギフトカードステータス
     */
    giftcardstatus: string;
    /**
     * 他決済利用金額
     */
    tkssiryukngk: string;
    static parse(resultObject: any): GiftCardIDAuthResult;
}
