import { Service } from '../../common/Service';
import { GiftCardCancelResult } from './models/GiftCardCancelResult';
import { GiftCardIDAuthResult } from './models/GiftCardIDAuthResult';
/**
 * GiftCardService
 */
export declare class GiftCardService2 extends Service {
    /**
     * ムビチケギフトカード認証
     */
    giftCardIDAuth(params: Object): Promise<{
        response: any;
        result: GiftCardIDAuthResult[];
    }>;
    /**
     * ムビチケギフトカード取消
     */
    giftCardCancel(params: Object): Promise<{
        response: any;
        result: GiftCardCancelResult[];
    }>;
}
