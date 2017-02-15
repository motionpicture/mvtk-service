import Service from '../../common/Service';
import GetDigitalIncentiveDownloadResult from './Models/GetDigitalIncentiveDownloadResult';
import GetDigitalIncentiveDownloadLinkListResult from './Models/GetDigitalIncentiveDownloadLinkListResult';
/**
 * デジタルインセンティブダウンロード
 * @class
 */
export default class DigitalIncentiveDownloadService extends Service {
    /**
     * デジタルインセンティブダウンロード
     * @param {GetDigitalIncentiveDownloadIn} args
     */
    getDigitalIncentiveDownload(params: Object, cb: (err: any, response: any, getDigitalIncentiveDownloadResult: GetDigitalIncentiveDownloadResult | null) => void): void;
    /**
     * デジタルインセンティブダウンロード情報検索
     *
     * @param {GetDigitalIncentiveDownloadLinkListIn} args
     */
    getDigitalIncentiveDownloadLinkList(params: Object, cb: (err: any, response: any, getDigitalIncentiveDownloadLinkListResult: GetDigitalIncentiveDownloadLinkListResult | null) => void): void;
}
