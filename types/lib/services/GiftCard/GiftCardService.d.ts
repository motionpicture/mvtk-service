import Service from '../../Common/Service';
import MvtkGiftCardBalanceInquiryResult from './Models/MvtkGiftCardBalanceInquiryResult';
import { IMvtkGiftCardEntryIn } from './Models/MvtkGiftCardEntryIn';
import MvtkGiftCardEntryResult from './Models/MvtkGiftCardEntryResult';
/**
 * GiftCardService
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
     * @param {IMvtkGiftCardEntryIn} args
     */
    mvtkGiftCardEntry(params: IMvtkGiftCardEntryIn, cb: (err: any, response: any, mvtkGiftCardEntryResults: MvtkGiftCardEntryResult[] | null) => void): void;
}
