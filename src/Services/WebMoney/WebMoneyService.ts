import Service from '../../common/Service';
import Constants from '../../common/util/Constants';
import WebMoneyEntryIn from './models/WebMoneyEntryIn';
import WebMoneyEntryResult from './models/WebMoneyEntryResult';
import DecryptWebMoneyKssiInfoResult from './models/DecryptWebMoneyKssiInfoResult';

export default class WebMoneyService extends Service {
    /**
     * WebMoney決済実行
     *
     * @param {WebMoneyEntryIn} webMoneyEntryIn
     */
    public webMoneyEntry(params: Object) {
        let method = 'WebMoneyEntry';

        let args = new WebMoneyEntryIn(params);

        let message = args.toXml();

        return new Promise<{
            response: any;
            result: WebMoneyEntryResult;
        }>((resolve, reject) => {
            this.call(method, message, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                let webMoneyEntryResult: WebMoneyEntryResult = null;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    webMoneyEntryResult = WebMoneyEntryResult.parse(result);
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: webMoneyEntryResult
                });
            });
        });
    }

    /**
     * WebMoney決済情報複合化
     *
     * @param {string} encryptedKssiInfo
     */
    public decryptWebMoneyKssiInfo(encryptedKssiInfo) {
        let method = 'DecryptWebMoneyKssiInfo';

        let args = {
            encryptedKssiInfo: encryptedKssiInfo
        };

        return new Promise<{
            response: any;
            result: DecryptWebMoneyKssiInfoResult;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }

                let decryptWebMoneyKssiInfoResult: DecryptWebMoneyKssiInfoResult = null;

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    decryptWebMoneyKssiInfoResult = DecryptWebMoneyKssiInfoResult.parse(result);
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: decryptWebMoneyKssiInfoResult
                });
            });
        });
    }
}
