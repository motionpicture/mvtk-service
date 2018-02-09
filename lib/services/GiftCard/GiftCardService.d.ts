import { Service } from '../../common/Service';
import { MvtkGiftCardBalanceInquiryResult } from './models/MvtkGiftCardBalanceInquiryResult';
import { MvtkGiftCardEntryResult } from './models/MvtkGiftCardEntryResult';
/**
 * GiftCardService
 */
export declare class GiftCardService extends Service {
    /**
     * ムビチケギフトカード残高確認
     *
     * @param mvtkgftcrdId ギフトカードID
     * @param mvtkgftcrdpinCd ギフトカードPINコード
     */
    mvtkGiftCardBalanceInquiry(mvtkgftcrdId: string, mvtkgftcrdpinCd: string): Promise<{
        response: any;
        result: MvtkGiftCardBalanceInquiryResult;
    }>;
    /**
     * ギフトカード利用
     */
    mvtkGiftCardEntry(params: Object): Promise<{
        response: any;
        result: MvtkGiftCardEntryResult[];
    }>;
}
