import Service from '../../common/Service';
import Constants from '../../common/Util/Constants';
import { GetGmoEntryTranIn, IGetGmoEntryTranIn } from './models/GetGmoEntryTranIn';
import GetGmoEntryTranResult from './models/GetGmoEntryTranResult';
import { IRegisterPurchaseInfoIn, RegisterPurchaseInfoIn } from './models/RegisterPurchaseInfoIn';
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
    public getGmoEntryTran(params: IGetGmoEntryTranIn) {
        const method = 'GetGmoEntryTran';

        const args = new GetGmoEntryTranIn(params);

        const message = args.toXml();

        return new Promise<{
            response: any;
            result: GetGmoEntryTranResult;
        }>((resolve, reject) => {
            this.call(method, message, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                let getGmoEntryTranResult: GetGmoEntryTranResult | null = null;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    getGmoEntryTranResult = GetGmoEntryTranResult.parse(result);
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: getGmoEntryTranResult
                });
            });
        });
    }

    /**
     * 購入情報登録
     *
     * @params {IRegisterPurchaseInfoIn} args
     */
    public registerPurchaseInfo(params: IRegisterPurchaseInfoIn) {
        const method = 'RegisterPurchaseInfo';

        const args = new RegisterPurchaseInfoIn(params);

        const message = args.toXml();

        return new Promise<{
            response: any;
            result: RegisterPurchaseInfoResult;
        }>((resolve, reject) => {
            this.call(method, message, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                let registerPurchaseInfoResult: RegisterPurchaseInfoResult | null = null;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    registerPurchaseInfoResult = RegisterPurchaseInfoResult.parse(result);
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: registerPurchaseInfoResult
                });
            });
        });
    }
}
