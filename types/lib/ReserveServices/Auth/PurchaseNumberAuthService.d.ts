import Service from '../../Common/Service';
import { IPurchaseNumberAuthIn } from './Models/PurchaseNumberAuthIn';
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
     * @return {Promise<PurchaseNumberAuthResult>} 購入管理番号認証out
     */
    purchaseNumberAuth(params: IPurchaseNumberAuthIn): Promise<PurchaseNumberAuthResult>;
}
