import Service from '../../common/Service';
import GiftCardIDAuthResult from './Models/GiftCardIDAuthResult';
import GiftCardCancelResult from './Models/GiftCardCancelResult';
export default class GiftCardService extends Service {
    /**
     * ムビチケギフトカード認証
     *
     * @param {GiftCardIDAuthIn} args
     */
    giftCardIDAuth(params: Object): Promise<{
        response: any;
        result: GiftCardIDAuthResult[];
    }>;
    /**
     * ムビチケギフトカード取消
     *
     * @param {Array<GiftCardCancelIn>} args
     */
    giftCardCancel(params: Object): Promise<{
        response: any;
        result: GiftCardCancelResult[];
    }>;
}
