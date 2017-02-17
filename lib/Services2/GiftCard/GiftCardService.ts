import Service from '../../Common/Service';
import Constants from '../../Common/Util/Constants';
import { GiftCardCancelIn, IGiftCardCancelIn } from './Models/GiftCardCancelIn';
import GiftCardCancelResult from './Models/GiftCardCancelResult';
import { GiftCardIDAuthIn, IGiftCardIDAuthIn } from './Models/GiftCardIDAuthIn';
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
    public giftCardIDAuth(
        params: IGiftCardIDAuthIn,
        cb: (err: any, response: any, giftCardIDAuthResults: GiftCardIDAuthResult[] | null) => void
    ): void {
        const method = 'GiftCardIDAuth';

        const args = new GiftCardIDAuthIn(params);

        this.call(method, args.toXml(), (err, response, result) => {
            if (err) return cb(err, response, null);

            const giftCardIDAuthResults: GiftCardIDAuthResult[] = [];

            if (result.MVTKGFTCRD_INFO_OUT && result.MVTKGFTCRD_INFO_OUT.hasOwnProperty('MvtkgftcrdInfo')) {
                if (Array.isArray(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo)) {
                    for (const info of result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo) {
                        giftCardIDAuthResults.push(GiftCardIDAuthResult.parse(info));
                    }
                } else {
                    giftCardIDAuthResults.push(GiftCardIDAuthResult.parse(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo));
                }
            }

            cb(err, response, giftCardIDAuthResults);
        });
    }

    /**
     * ムビチケギフトカード取消
     *
     * @param {Array<IGiftCardCancelIn>} args
     */
    public giftCardCancel(
        params: IGiftCardCancelIn,
        cb: (err: any, response: any, giftCardCancelResults: GiftCardCancelResult[] | null) => void
        ): void {
        const method = 'GiftCardCancel';

        const args = new GiftCardCancelIn(params);

        const message = args.toXml();

        this.call(method, message, (err, response, result) => {
            if (err) return cb(err, response, null);

            const giftCardCancelResults: GiftCardCancelResult[] = [];

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                if (Array.isArray(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo)) {
                    for (const info of result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo) {
                        giftCardCancelResults.push(GiftCardCancelResult.parse(info));
                    }
                } else {
                    giftCardCancelResults.push(GiftCardCancelResult.parse(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo));
                }
            }

            cb(err, response, giftCardCancelResults);
        });
    }
}
