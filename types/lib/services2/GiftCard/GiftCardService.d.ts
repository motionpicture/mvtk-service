import Service from '../../Common/Service';
import { IGiftCardCancelIn } from './Models/GiftCardCancelIn';
import GiftCardCancelResult from './Models/GiftCardCancelResult';
import { IGiftCardIDAuthIn } from './Models/GiftCardIDAuthIn';
import GiftCardIDAuthResult from './Models/GiftCardIDAuthResult';
/**
 * GiftCardService
 * @class
 * @extends {Service}
 */
export default class GiftCardService extends Service {
    /**
     * ムビチケギフトカード認証
     *
     * @param {IGiftCardIDAuthIn} args
     */
    giftCardIDAuth(params: IGiftCardIDAuthIn, cb: (err: any, response: any, giftCardIDAuthResults: GiftCardIDAuthResult[] | null) => void): void;
    /**
     * ムビチケギフトカード取消
     *
     * @param {Array<IGiftCardCancelIn>} args
     */
    giftCardCancel(params: IGiftCardCancelIn, cb: (err: any, response: any, giftCardCancelResults: GiftCardCancelResult[] | null) => void): void;
}
