import Service from '../../Common/Service';
import MvtkGiftCardBalanceInquiryResult from './Models/MvtkGiftCardBalanceInquiryResult';
import MvtkGiftCardEntryResult from './Models/MvtkGiftCardEntryResult';
export default class GiftCardService extends Service {
    /**
     * ムビチケギフトカード残高確認
     *
     * @param {string} mvtkgftcrdId ギフトカードID
     * @param {string} mvtkgftcrdpinCd ギフトカードPINコード
     */
    mvtkGiftCardBalanceInquiry(mvtkgftcrdId: string, mvtkgftcrdpinCd: string, cb: (err, response, mvtkGiftCardBalanceInquiryResult: MvtkGiftCardBalanceInquiryResult) => void): void;
    /**
     * ギフトカード利用
     *
     * @param {MvtkGiftCardEntryIn} args
     */
    mvtkGiftCardEntry(params: Object, cb: (err, response, mvtkGiftCardEntryResults: Array<MvtkGiftCardEntryResult>) => void): void;
}
