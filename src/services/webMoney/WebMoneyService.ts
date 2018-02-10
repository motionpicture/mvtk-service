import { Service } from '../../common/Service';
import { Constants } from '../../common/util/Constants';
import { DecryptWebMoneyKssiInfoResult } from './models/DecryptWebMoneyKssiInfoResult';
import { WebMoneyEntryIn } from './models/WebMoneyEntryIn';
import { WebMoneyEntryResult } from './models/WebMoneyEntryResult';

/**
 * WebMoneyService
 */
export class WebMoneyService extends Service {
    /**
     * WebMoney決済実行
     *
     */
    public async webMoneyEntry(params: Object) {
        const method = 'WebMoneyEntry';

        const args = new WebMoneyEntryIn(params);

        const message = args.toXml();

        return new Promise<{
            response: any;
            result: WebMoneyEntryResult;
        }>((resolve, reject) => {
            this.call(method, message, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                let webMoneyEntryResult: WebMoneyEntryResult;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    webMoneyEntryResult = WebMoneyEntryResult.parse(result);
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
                }
                resolve({
                    response: result,
                    result: webMoneyEntryResult
                });
            });
        });
    }

    /**
     * WebMoney決済情報複合化
     *
     */
    public async decryptWebMoneyKssiInfo(encryptedKssiInfo: string) {
        const method = 'DecryptWebMoneyKssiInfo';

        const args = {
            encryptedKssiInfo: encryptedKssiInfo
        };

        return new Promise<{
            response: any;
            result: DecryptWebMoneyKssiInfoResult;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, _response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }

                let decryptWebMoneyKssiInfoResult: DecryptWebMoneyKssiInfoResult;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    decryptWebMoneyKssiInfoResult = DecryptWebMoneyKssiInfoResult.parse(result);
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
                }
                resolve({
                    response: result,
                    result: decryptWebMoneyKssiInfoResult
                });
            });
        });
    }
}
