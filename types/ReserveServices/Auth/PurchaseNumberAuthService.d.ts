import Service from '../../Common/Service';
import PurchaseNumberAuthResult from './Models/PurchaseNumberAuthResult';
/**
 *
 * @class 購入管理番号認証クラス
 * @extends Service
 *
 */
export default class PurchaseNumberAuthService extends Service {
    /**
     * 購入管理番号認証
     *
     * @param {Object} params
     * @return {Promise<PurchaseNumberAuthResult>}
     */
    purchaseNumberAuth(params: Object): Promise<PurchaseNumberAuthResult>;
}
