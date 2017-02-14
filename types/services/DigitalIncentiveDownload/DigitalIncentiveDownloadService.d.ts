import Service from '../../common/Service';
import GetDigitalIncentiveDownloadResult from './Models/GetDigitalIncentiveDownloadResult';
import GetDigitalIncentiveDownloadLinkListResult from './Models/GetDigitalIncentiveDownloadLinkListResult';
export default class DigitalIncentiveDownloadService extends Service {
    /**
    * デジタルインセンティブダウンロード
    *
    * @param {GetDigitalIncentiveDownloadIn} args
    */
    getDigitalIncentiveDownload(params: Object, cb: (err, response, getDigitalIncentiveDownloadResult: GetDigitalIncentiveDownloadResult) => void): void;
    /**
     * デジタルインセンティブダウンロード情報検索
     *
     * @param {GetDigitalIncentiveDownloadLinkListIn} args
     */
    getDigitalIncentiveDownloadLinkList(params: Object, cb: (err, response, getDigitalIncentiveDownloadLinkListResult: GetDigitalIncentiveDownloadLinkListResult) => void): void;
}
