import { Service } from '../../common/Service';
import { DecryptWebMoneyKssiInfoResult } from './models/DecryptWebMoneyKssiInfoResult';
import { WebMoneyEntryResult } from './models/WebMoneyEntryResult';
/**
 * WebMoneyService
 */
export declare class WebMoneyService extends Service {
    /**
     * WebMoney決済実行
     *
     */
    webMoneyEntry(params: Object): Promise<{
        response: any;
        result: WebMoneyEntryResult;
    }>;
    /**
     * WebMoney決済情報複合化
     *
     */
    decryptWebMoneyKssiInfo(encryptedKssiInfo: string): Promise<{
        response: any;
        result: DecryptWebMoneyKssiInfoResult;
    }>;
}
