import Service from '../../common/Service';
import Constants from '../../common/Util/Constants';
import { GetGmoEntryTranIn, IGetGmoEntryTranIn } from './Models/GetGmoEntryTranIn';
import GetGmoEntryTranResult from './Models/GetGmoEntryTranResult';
import { IRegisterPurchaseInfoIn, RegisterPurchaseInfoIn } from './Models/RegisterPurchaseInfoIn';
import RegisterPurchaseInfoResult from './Models/RegisterPurchaseInfoResult';

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
    public getGmoEntryTran(params: IGetGmoEntryTranIn, cb: (err: any, response: any, result: GetGmoEntryTranResult | null) => void): void {
        const method = 'GetGmoEntryTran';

        const args = new GetGmoEntryTranIn(params);

        this.call(method, args.toXml(), (err, response, result) => {
            if (err) return cb(err, response, null);

            let getGmoEntryTranResult: GetGmoEntryTranResult | null = null;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                getGmoEntryTranResult = GetGmoEntryTranResult.parse(result);
            }

            cb(err, response, getGmoEntryTranResult);
        });
    }

    /**
     * 購入情報登録
     *
     * @params {IRegisterPurchaseInfoIn} args
     */
    public registerPurchaseInfo(
        params: IRegisterPurchaseInfoIn,
        cb: (err: any, response: any, registerPurchaseInfoResult: RegisterPurchaseInfoResult | null) => void
    ): void {
        const method = 'RegisterPurchaseInfo';

        const args = new RegisterPurchaseInfoIn(params);

        this.call(method, args.toXml(), (err, response, result) => {
            if (err) return cb(err, response, null);

            let registerPurchaseInfoResult: RegisterPurchaseInfoResult | null = null;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                registerPurchaseInfoResult = RegisterPurchaseInfoResult.parse(result);
            }

            cb(err, response, registerPurchaseInfoResult);
        });
    }
}
