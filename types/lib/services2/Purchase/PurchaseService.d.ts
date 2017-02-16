import Service from '../../Common/Service';
import { IGetGmoEntryTranIn } from './Models/GetGmoEntryTranIn';
import GetGmoEntryTranResult from './Models/GetGmoEntryTranResult';
import { IRegisterPurchaseInfoIn } from './Models/RegisterPurchaseInfoIn';
import RegisterPurchaseInfoResult from './Models/RegisterPurchaseInfoResult';
/**
 * PurchaseService
 * @class
 * @extends {Service}
 */
export default class PurchaseService extends Service {
    /**
     * 代行会社取引登録呼出
     *
     * @param {IGetGmoEntryTranIn} args
     */
    getGmoEntryTran(params: IGetGmoEntryTranIn, cb: (err: any, response: any, result: GetGmoEntryTranResult | null) => void): void;
    /**
     * 購入情報登録
     *
     * @params {IRegisterPurchaseInfoIn} args
     */
    registerPurchaseInfo(params: IRegisterPurchaseInfoIn, cb: (err: any, response: any, registerPurchaseInfoResult: RegisterPurchaseInfoResult | null) => void): void;
}
