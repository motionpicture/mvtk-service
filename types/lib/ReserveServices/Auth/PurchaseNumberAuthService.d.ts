import Service from '../../Common/Service';
import { IPurchaseNumberAuthIn } from './Models/PurchaseNumberAuthIn';
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
     * @param {IPurchaseNumberAuthIn} params
     * @return {Promise<PurchaseNumberAuthResult>}
     */
    purchaseNumberAuth(params: IPurchaseNumberAuthIn): Promise<PurchaseNumberAuthResult>;
}
