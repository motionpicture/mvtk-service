import Service from '../../Common/Service';
import Constants from '../../Common/Util/Constants';
import DecryptWebMoneyKssiInfoResult from './Models/DecryptWebMoneyKssiInfoResult';
import { IWebMoneyEntryIn, WebMoneyEntryIn } from './Models/WebMoneyEntryIn';
import WebMoneyEntryResult from './Models/WebMoneyEntryResult';

/**
 * WebMoneyService
 * @class
 * @extends {Service}
 */
export default class WebMoneyService extends Service {
    /**
     * WebMoney決済実行
     *
     * @param {IWebMoneyEntryIn} webMoneyEntryIn
     */
    public webMoneyEntry(
        params: IWebMoneyEntryIn,
        cb: (err: any, response: any, webMoneyEntryResult: WebMoneyEntryResult | null) => void
    ): void {
        const method = 'WebMoneyEntry';

        const args = new WebMoneyEntryIn(params);

        this.call(method, args.toXml(), (err, response, result) => {
            if (err) return cb(err, response, null);

            let webMoneyEntryResult: WebMoneyEntryResult | null = null;

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
    public decryptWebMoneyKssiInfo(
        encryptedKssiInfo: string,
        cb: (err: any, response: any, decryptWebMoneyKssiInfoResult: DecryptWebMoneyKssiInfoResult | null) => void
    ): void {
        const method = 'DecryptWebMoneyKssiInfo';

        const args = {
            encryptedKssiInfo: encryptedKssiInfo
        };

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, null);

            let decryptWebMoneyKssiInfoResult: DecryptWebMoneyKssiInfoResult | null = null;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                decryptWebMoneyKssiInfoResult = DecryptWebMoneyKssiInfoResult.parse(result);
            }

            cb(err, response, decryptWebMoneyKssiInfoResult);
        });
    }
}
