import Service from '../../Common/Service';
import { IGetDigitalIncentiveDownloadIn } from './Models/GetDigitalIncentiveDownloadIn';
import { IGetDigitalIncentiveDownloadLinkListIn } from './Models/GetDigitalIncentiveDownloadLinkListIn';
import GetDigitalIncentiveDownloadLinkListResult from './Models/GetDigitalIncentiveDownloadLinkListResult';
import GetDigitalIncentiveDownloadResult from './Models/GetDigitalIncentiveDownloadResult';
/**
 * DigitalIncentiveDownloadService
 * @class
 */
export default class DigitalIncentiveDownloadService extends Service {
    /**
     * デジタルインセンティブダウンロード
     * @method
     * @param {IGetDigitalIncentiveDownloadIn} args
     */
    getDigitalIncentiveDownload(params: IGetDigitalIncentiveDownloadIn, cb: (err: any, response: any, getDigitalIncentiveDownloadResult: GetDigitalIncentiveDownloadResult | null) => void): void;
    /**
     * デジタルインセンティブダウンロード情報検索
     * @method
     * @param {IGetDigitalIncentiveDownloadLinkListIn} args
     */
    getDigitalIncentiveDownloadLinkList(params: IGetDigitalIncentiveDownloadLinkListIn, cb: (err: any, response: any, getDigitalIncentiveDownloadLinkListResult: GetDigitalIncentiveDownloadLinkListResult | null) => void): void;
}
