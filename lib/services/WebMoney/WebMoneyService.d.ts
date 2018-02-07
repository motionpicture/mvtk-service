import Service from '../../common/Service';
import WebMoneyEntryResult from './Models/WebMoneyEntryResult';
import DecryptWebMoneyKssiInfoResult from './Models/DecryptWebMoneyKssiInfoResult';
export default class WebMoneyService extends Service {
    /**
     * WebMoney決済実行
     *
     * @param {WebMoneyEntryIn} webMoneyEntryIn
     */
    webMoneyEntry(params: Object): Promise<{
        response: any;
        result: WebMoneyEntryResult;
    }>;
    /**
     * WebMoney決済情報複合化
     *
     * @param {string} encryptedKssiInfo
     */
    decryptWebMoneyKssiInfo(encryptedKssiInfo: any): Promise<{
        response: any;
        result: DecryptWebMoneyKssiInfoResult;
    }>;
}
