import Service from '../../common/Service';
import MvtkGiftCardBalanceInquiryResult from './models/MvtkGiftCardBalanceInquiryResult';
import MvtkGiftCardEntryResult from './models/MvtkGiftCardEntryResult';
export default class GiftCardService extends Service {
    /**
     * ムビチケギフトカード残高確認
     *
     * @param {string} mvtkgftcrdId ギフトカードID
     * @param {string} mvtkgftcrdpinCd ギフトカードPINコード
     */
    mvtkGiftCardBalanceInquiry(mvtkgftcrdId: string, mvtkgftcrdpinCd: string): Promise<{
        response: any;
        result: MvtkGiftCardBalanceInquiryResult;
    }>;
    /**
     * ギフトカード利用
     *
     * @param {MvtkGiftCardEntryIn} args
     */
    mvtkGiftCardEntry(params: Object): Promise<{
        response: any;
        result: MvtkGiftCardEntryResult[];
    }>;
}
