import { Service } from '../../common/Service';
import { Constants } from '../../common/util/Constants';
import { GetGmoEntryTranIn, IGetGmoEntryTranIn } from './models/GetGmoEntryTranIn';
import { GetGmoEntryTranResult } from './models/GetGmoEntryTranResult';
import { IRegisterPurchaseInfoIn, RegisterPurchaseInfoIn } from './models/RegisterPurchaseInfoIn';
import { RegisterPurchaseInfoResult } from './models/RegisterPurchaseInfoResult';

/**
 * PurchaseService2
 * @extends {Service}
 */
export class PurchaseService2 extends Service {
    /**
     * 代行会社取引登録呼出
     */
    public async getGmoEntryTran(params: IGetGmoEntryTranIn) {
        const method = 'GetGmoEntryTran';

        const args = new GetGmoEntryTranIn(params);

        const message = args.toXml();

        return new Promise<{
            response: any;
            result: GetGmoEntryTranResult;
        }>((resolve, reject) => {
            this.call(method, message, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                let getGmoEntryTranResult: GetGmoEntryTranResult | null = null;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    getGmoEntryTranResult = GetGmoEntryTranResult.parse(result);
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
                }
                resolve({
                    response: result,
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
    public async registerPurchaseInfo(params: IRegisterPurchaseInfoIn) {
        const method = 'RegisterPurchaseInfo';

        const args = new RegisterPurchaseInfoIn(params);

        const message = args.toXml();

        return new Promise<{
            response: any;
            result: RegisterPurchaseInfoResult;
        }>((resolve, reject) => {
            this.call(method, message, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                let registerPurchaseInfoResult: RegisterPurchaseInfoResult | null = null;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    registerPurchaseInfoResult = RegisterPurchaseInfoResult.parse(result);
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
                }
                resolve({
                    response: result,
                    result: registerPurchaseInfoResult
                });
            });
        });
    }
}
