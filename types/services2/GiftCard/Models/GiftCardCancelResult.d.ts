export default class GiftCardCancelResult {
    /**
     * 凸版サービス返却値
     */
    tppnsrvcrspns: string;
    /**
     * ムビチケギフトカードID
     */
    mvtkgftcrdId: string;
    /**
     * 利用前残高
     */
    ryumezndk: string;
    /**
     * 残高
     */
    zndk: string;
    /**
     * 承認番号
     */
    synnNo: string;
    /**
     * 処理要求日時
     */
    syrykyDt: string;
    /**
     * ギフトカードステータス
     */
    giftcardstatus: string;
    static parse(resultObject: any): GiftCardCancelResult;
}
