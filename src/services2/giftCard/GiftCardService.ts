
import { Service } from '../../common/Service';
import { Constants } from '../../common/util/Constants';
import { GiftCardCancelIn } from './models/GiftCardCancelIn';
import { GiftCardCancelResult } from './models/GiftCardCancelResult';
import { GiftCardIDAuthIn } from './models/GiftCardIDAuthIn';
import { GiftCardIDAuthResult } from './models/GiftCardIDAuthResult';

/**
 * GiftCardService
 */
export class GiftCardService2 extends Service {
    /**
     * ムビチケギフトカード認証
     */
    public async giftCardIDAuth(params: Object) {
        const method = 'GiftCardIDAuth';

        const args = new GiftCardIDAuthIn(params);

        return new Promise<{
            response: any;
            result: GiftCardIDAuthResult[];
        }>((resolve, reject) => {
            this.call(method, args, (err: any, response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                const giftCardIDAuthResults: GiftCardIDAuthResult[] = [];

                if (result.MVTKGFTCRD_INFO_OUT && result.MVTKGFTCRD_INFO_OUT.hasOwnProperty('MvtkgftcrdInfo')) {
                    if (Array.isArray(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo)) {
                        for (const info of result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo) {
                            giftCardIDAuthResults.push(GiftCardIDAuthResult.parse(info));
                        }
                    } else {
                        giftCardIDAuthResults.push(GiftCardIDAuthResult.parse(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo));
                    }
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
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
     */
    public async giftCardCancel(params: Object) {
        const method = 'GiftCardCancel';

        const args = new GiftCardCancelIn(params);

        const message = args.toXml();

        return new Promise<{
            response: any;
            result: GiftCardCancelResult[];
        }>((resolve, reject) => {
            this.call(method, message, (err: any, response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                const giftCardCancelResults: GiftCardCancelResult[] = [];

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    if (Array.isArray(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo)) {
                        for (const info of result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo) {
                            giftCardCancelResults.push(GiftCardCancelResult.parse(info));
                        }
                    } else {
                        giftCardCancelResults.push(GiftCardCancelResult.parse(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo));
                    }
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
                }
                resolve({
                    response: response,
                    result: giftCardCancelResults
                });
            });
        });
    }
}
