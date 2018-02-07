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
    public giftCardIDAuth(params: Object) {
        let method = 'GiftCardIDAuth';

        let args = new GiftCardIDAuthIn(params);

        return new Promise<{
            response: any;
            result: GiftCardIDAuthResult[];
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                let giftCardIDAuthResults: GiftCardIDAuthResult[] = [];

                if (result.MVTKGFTCRD_INFO_OUT && result.MVTKGFTCRD_INFO_OUT.hasOwnProperty('MvtkgftcrdInfo')) {
                    if (Array.isArray(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo)) {
                        for (let info of result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo) {
                            giftCardIDAuthResults.push(GiftCardIDAuthResult.parse(info));
                        }
                    } else {
                        giftCardIDAuthResults.push(GiftCardIDAuthResult.parse(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo));
                    }
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: giftCardIDAuthResults
                });
            });
        });
    }

    /**
     * ムビチケギフトカード取消
     * 
     * @param {Array<GiftCardCancelIn>} args
     */
    public giftCardCancel(params: Object) {
        let method = 'GiftCardCancel';

        let args = new GiftCardCancelIn(params);

        let message = args.toXml();

        return new Promise<{
            response: any;
            result: GiftCardCancelResult[];
        }>((resolve, reject) => {
            this.call(method, message, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                let giftCardCancelResults: GiftCardCancelResult[] = [];

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    if (Array.isArray(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo)) {
                        for (let info of result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo) {
                            giftCardCancelResults.push(GiftCardCancelResult.parse(info));
                        }
                    } else {
                        giftCardCancelResults.push(GiftCardCancelResult.parse(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo));
                    }
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: giftCardCancelResults
                });
            });
        });
    }
}
