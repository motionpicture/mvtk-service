import Service from '../../Common/Service';
import Constants from '../../Common/Util/Constants';
import GetGmoEntryTranIn from './Models/GetGmoEntryTranIn';
import GetGmoEntryTranResult from './Models/GetGmoEntryTranResult';
import RegisterPurchaseInfoIn from './Models/RegisterPurchaseInfoIn';
import RegisterPurchaseInfoResult from './Models/RegisterPurchaseInfoResult';

export default class PurchaseService extends Service {
    /**
     * 代行会社取引登録呼出
     *
     * @param {GetGmoEntryTranIn} args
     */
    public getGmoEntryTran(params: Object, cb: (err, response, result: GetGmoEntryTranResult) => any) {
        let method = 'GetGmoEntryTran';

        let args = GetGmoEntryTranIn.create(params);

        this.call(method, args.toXml(), (err, response, result) => {
            if (err) return cb(err, response, null);

            let getGmoEntryTranResult: GetGmoEntryTranResult = null;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                getGmoEntryTranResult = GetGmoEntryTranResult.parse(result);
            }

            cb(err, response, getGmoEntryTranResult);
        });
    }

    /**
     * 購入情報登録
     *
     * @params {RegisterPurchaseInfoIn} args
     */
    public registerPurchaseInfo(params: Object, cb: (err, response, registerPurchaseInfoResult: RegisterPurchaseInfoResult) => any) {
        let method = 'RegisterPurchaseInfo';

        let args = RegisterPurchaseInfoIn.create(params);

        let message = args.toXml();

        this.call(method, args.toXml(), (err, response, result) => {
            if (err) return cb(err, response, null);

            let registerPurchaseInfoResult: RegisterPurchaseInfoResult = null;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                registerPurchaseInfoResult = RegisterPurchaseInfoResult.parse(result);
            }

            cb(err, response, registerPurchaseInfoResult);
        });
    }
}
