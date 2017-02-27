import Service from '../../Common/Service';
import Constants from '../../Common/Util/Constants';
import {IPurchaseNumberAuthIn, PurchaseNumberAuthIn} from './Models/PurchaseNumberAuthIn';
import PurchaseNumberAuthResult from './Models/PurchaseNumberAuthResult';

/**
 * 購入管理番号認証クラス
 * @class PurchaseNumberAuthService
 * @extends {Service}
 *
 */
export default class PurchaseNumberAuthService extends Service {

    /**
     * 購入管理番号認証
     *
     * @param {IPurchaseNumberAuthIn} params 購入管理番号認証in
     * @return {Promise<PurchaseNumberAuthResult[]>} 購入管理番号認証out
     */
    public purchaseNumberAuth(params: IPurchaseNumberAuthIn): Promise<PurchaseNumberAuthResult[]> {
        const method = 'PurchaseNumberAuth';
        return new Promise((resolve, reject) => {
            const args = new PurchaseNumberAuthIn(params);

            this.call(method, args.toXml(), (err, response, result) => {
                if (err || !response) return reject(err);

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    const purchaseNumberAuthResults: PurchaseNumberAuthResult[] = [];
                    if (Array.isArray(result.KNYKNR_NO_INFO_OUT.KnyknrNoInfoOut)) {
                        for (const info of result.KNYKNR_NO_INFO_OUT.KnyknrNoInfoOut) {
                            purchaseNumberAuthResults.push(PurchaseNumberAuthResult.parse(info));
                        }
                    } else {
                        purchaseNumberAuthResults.push(PurchaseNumberAuthResult.parse(result.KNYKNR_NO_INFO_OUT.KnyknrNoInfoOut));
                    }
                    return resolve(purchaseNumberAuthResults);
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
            });
        });
    }
}
