import Service from '../../Common/Service';
import DecryptWebMoneyKssiInfoResult from './Models/DecryptWebMoneyKssiInfoResult';
import { IWebMoneyEntryIn } from './Models/WebMoneyEntryIn';
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
    webMoneyEntry(params: IWebMoneyEntryIn, cb: (err: any, response: any, webMoneyEntryResult: WebMoneyEntryResult | null) => void): void;
    /**
     * WebMoney決済情報複合化
     *
     * @param {string} encryptedKssiInfo
     */
    decryptWebMoneyKssiInfo(encryptedKssiInfo: string, cb: (err: any, response: any, decryptWebMoneyKssiInfoResult: DecryptWebMoneyKssiInfoResult | null) => void): void;
}
