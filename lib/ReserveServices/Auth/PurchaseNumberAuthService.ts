import Service from '../../Common/Service';
import Constants from '../../Common/Util/Constants';
import {IPurchaseNumberAuthIn, PurchaseNumberAuthIn} from './Models/PurchaseNumberAuthIn';
import PurchaseNumberAuthResult from './Models/PurchaseNumberAuthResult';

/**
 *
 * @class 購入管理番号認証クラス
 * @extends {Service}
 *
 */
export default class PurchaseNumberAuthService extends Service {

    /**
     * 購入管理番号認証
     *
     * @param {PurchaseNumberAuthIn} params
     * @return {Promise<PurchaseNumberAuthResult>}
     */
    public purchaseNumberAuth(params: IPurchaseNumberAuthIn): Promise<PurchaseNumberAuthResult> {
        const method = 'PurchaseNumberAuth';
        return new Promise((resolve, reject) => {
            const args = new PurchaseNumberAuthIn(params);

            let purchaseNumberAuthResult: PurchaseNumberAuthResult;

            this.call(method, args, (err, response, result) => {
                if (err || !response) return reject(err);
                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    purchaseNumberAuthResult = PurchaseNumberAuthResult.PARSE(result);
                    return resolve(purchaseNumberAuthResult);
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
            });
        });
    }
}
