import Service from '../../Common/Service';
import MvtkGiftCardBalanceInquiryResult from './Models/MvtkGiftCardBalanceInquiryResult';
import MvtkGiftCardEntryResult from './Models/MvtkGiftCardEntryResult';
/**
 * ムビチケギフトサービス
 * @class
 * @extends {Service}
 */
export default class GiftCardService extends Service {
    /**
     * ムビチケギフトカード残高確認
     *
     * @param {string} mvtkgftcrdId ギフトカードID
     * @param {string} mvtkgftcrdpinCd ギフトカードPINコード
     */
    mvtkGiftCardBalanceInquiry(mvtkgftcrdId: string, mvtkgftcrdpinCd: string, cb: (err: any, response: any, mvtkGiftCardBalanceInquiryResult: MvtkGiftCardBalanceInquiryResult | null) => void): void;
    /**
     * ギフトカード利用
     *
     * @param {MvtkGiftCardEntryIn} args
     */
    mvtkGiftCardEntry(params: Object, cb: (err: any, response: any, mvtkGiftCardEntryResults: MvtkGiftCardEntryResult[] | null) => void): void;
}
