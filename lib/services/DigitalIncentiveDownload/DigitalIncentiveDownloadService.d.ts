import Service from '../../common/Service';
import GetDigitalIncentiveDownloadResult from './Models/GetDigitalIncentiveDownloadResult';
import GetDigitalIncentiveDownloadLinkListResult from './Models/GetDigitalIncentiveDownloadLinkListResult';
export default class DigitalIncentiveDownloadService extends Service {
    /**
    * デジタルインセンティブダウンロード
    *
    * @param {GetDigitalIncentiveDownloadIn} args
    */
    getDigitalIncentiveDownload(params: Object): Promise<{
        response: any;
        result: GetDigitalIncentiveDownloadResult;
    }>;
    /**
     * デジタルインセンティブダウンロード情報検索
     *
     * @param {GetDigitalIncentiveDownloadLinkListIn} args
     */
    getDigitalIncentiveDownloadLinkList(params: Object): Promise<{
        response: any;
        result: GetDigitalIncentiveDownloadLinkListResult;
    }>;
}
