import Service from '../../common/Service';
import Constants from '../../common/util/Constants';
import GiftCardIDAuthIn from './Models/GiftCardIDAuthIn';
import GiftCardIDAuthResult from './Models/GiftCardIDAuthResult';
import GiftCardCancelIn from './Models/GiftCardCancelIn';
import GiftCardCancelResult from './Models/GiftCardCancelResult';

export default class GiftCardService extends Service {
    /**
     * ムビチケギフトカード認証
     * 
     * @param {GiftCardIDAuthIn} args
     */
    public giftCardIDAuth(params: Object, cb: (err, response, giftCardIDAuthResults: Array<GiftCardIDAuthResult>) => void): void {
        let method = 'GiftCardIDAuth';

        let args = new GiftCardIDAuthIn(params);

        this.call(method, args.toXml(), (err, response, result) => {
            if (err) return cb(err, response, null);

            let giftCardIDAuthResults: Array<GiftCardIDAuthResult> = [];

            if (result.MVTKGFTCRD_INFO_OUT && result.MVTKGFTCRD_INFO_OUT.hasOwnProperty('MvtkgftcrdInfo')) {
                if (Array.isArray(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo)) {
                    for (let info of result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo) {
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
     * @param {Array<GiftCardCancelIn>} args
     */
    public giftCardCancel(params: Object, cb: (err, response, giftCardCancelResults: Array<GiftCardCancelResult>) => void): void {
        let method = 'GiftCardCancel';

        let args = new GiftCardCancelIn(params);

        let message = args.toXml();

        this.call(method, message, (err, response, result) => {
            if (err) return cb(err, response, null);

            let giftCardCancelResults: Array<GiftCardCancelResult> = [];

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                if (Array.isArray(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo)) {
                    for (let info of result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo) {
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
