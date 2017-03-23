/**
 * ギフトカード利用out
 * @class
 */
export default class MvtkGiftCardEntryResult {
    tppnsrvcrspns: string;
    mvtkgftcrdId: string;
    mvtkgftcrdpinCd: string;
    gftcrdkssiknrNo: string;
    ryukngk: string;
    ryumezndk: string;
    zndk: string;
    synnNo: string;
    syrykyDt: string;
    giftcardstatus: string;
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {MvtkGiftCardEntryResult} ギフトカード利用out
     */
    static parse(resultObject: any): MvtkGiftCardEntryResult;
}
