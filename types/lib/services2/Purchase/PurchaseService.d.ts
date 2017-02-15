import Service from '../../common/Service';
import GetGmoEntryTranResult from './Models/GetGmoEntryTranResult';
import RegisterPurchaseInfoResult from './Models/RegisterPurchaseInfoResult';
export default class PurchaseService extends Service {
    /**
     * 代行会社取引登録呼出
     *
     * @param {GetGmoEntryTranIn} args
     */
    getGmoEntryTran(params: Object, cb: (err, response, result: GetGmoEntryTranResult) => void): void;
    /**
     * 購入情報登録
     *
     * @params {RegisterPurchaseInfoIn} args
     */
    registerPurchaseInfo(params: Object, cb: (err, response, registerPurchaseInfoResult: RegisterPurchaseInfoResult) => void): void;
}
