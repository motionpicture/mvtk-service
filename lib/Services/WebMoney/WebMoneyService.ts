import Service from '../../common/Service';
import Constants from '../../common/util/Constants';
import WebMoneyEntryIn from './Models/WebMoneyEntryIn';
import WebMoneyEntryResult from './Models/WebMoneyEntryResult';
import DecryptWebMoneyKssiInfoResult from './Models/DecryptWebMoneyKssiInfoResult';

export default class WebMoneyService extends Service {
    /**
     * WebMoney決済実行
     *
     * @param {WebMoneyEntryIn} webMoneyEntryIn
     */
    public webMoneyEntry(params: Object, cb: (err, response, webMoneyEntryResult: WebMoneyEntryResult) => any) {
        let method = 'WebMoneyEntry';

        let args = WebMoneyEntryIn.create(params);

        this.call(method, args.toXml(), (err, response, result) => {
            if (err) return cb(err, response, null);

            let webMoneyEntryResult: WebMoneyEntryResult = null;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                webMoneyEntryResult = WebMoneyEntryResult.parse(result);
            }

            cb(err, response, webMoneyEntryResult);
        });
    }

    /**
     * WebMoney決済情報複合化
     *
     * @param {string} encryptedKssiInfo
     */
    public decryptWebMoneyKssiInfo(encryptedKssiInfo, cb: (err, response, decryptWebMoneyKssiInfoResult: DecryptWebMoneyKssiInfoResult) => any) {
        let method = 'DecryptWebMoneyKssiInfo';

        let args = {
            encryptedKssiInfo: encryptedKssiInfo
        };

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, null);

            let decryptWebMoneyKssiInfoResult: DecryptWebMoneyKssiInfoResult = null;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                decryptWebMoneyKssiInfoResult = DecryptWebMoneyKssiInfoResult.parse(result);
            }

            cb(err, response, decryptWebMoneyKssiInfoResult);
        });
    }
}
