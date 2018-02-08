import Service from '../../common/Service';
import { IGetGmoEntryTranIn } from './models/GetGmoEntryTranIn';
import GetGmoEntryTranResult from './models/GetGmoEntryTranResult';
import { IRegisterPurchaseInfoIn } from './models/RegisterPurchaseInfoIn';
import RegisterPurchaseInfoResult from './models/RegisterPurchaseInfoResult';
/**
 * PurchaseService2
 * @class
 * @extends {Service}
 */
export default class PurchaseService2 extends Service {
    /**
     * 代行会社取引登録呼出
     *
     * @param {IGetGmoEntryTranIn} args
     */
    getGmoEntryTran(params: IGetGmoEntryTranIn): Promise<{
        response: any;
        result: GetGmoEntryTranResult;
    }>;
    /**
     * 購入情報登録
     *
     * @params {IRegisterPurchaseInfoIn} args
     */
    registerPurchaseInfo(params: IRegisterPurchaseInfoIn): Promise<{
        response: any;
        result: RegisterPurchaseInfoResult;
    }>;
}
