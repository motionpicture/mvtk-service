import { Service } from '../../common/Service';
import { GetDigitalIncentiveDownloadLinkListResult } from './models/GetDigitalIncentiveDownloadLinkListResult';
import { GetDigitalIncentiveDownloadResult } from './models/GetDigitalIncentiveDownloadResult';
/**
 * DigitalIncentiveDownloadService
 */
export declare class DigitalIncentiveDownloadService extends Service {
    /**
     * デジタルインセンティブダウンロード
     */
    getDigitalIncentiveDownload(params: Object): Promise<{
        response: any;
        result: GetDigitalIncentiveDownloadResult;
    }>;
    /**
     * デジタルインセンティブダウンロード情報検索
     *
     */
    getDigitalIncentiveDownloadLinkList(params: Object): Promise<{
        response: any;
        result: GetDigitalIncentiveDownloadLinkListResult;
    }>;
}
