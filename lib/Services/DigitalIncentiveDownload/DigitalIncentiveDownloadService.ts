import Service from '../../common/Service';
import Constants from '../../common/util/Constants';
import GetDigitalIncentiveDownloadIn from './Models/GetDigitalIncentiveDownloadIn';
import GetDigitalIncentiveDownloadResult from './Models/GetDigitalIncentiveDownloadResult';
import GetDigitalIncentiveDownloadLinkListIn from './Models/GetDigitalIncentiveDownloadLinkListIn';
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
    public getDigitalIncentiveDownload(
        params: Object,
        cb: (err: any, response: any, getDigitalIncentiveDownloadResult: GetDigitalIncentiveDownloadResult | null) => void
    ): void {
        const method = 'GetDigitalIncentiveDownload';

        const args = new GetDigitalIncentiveDownloadIn(params);

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, null);

            let getDigitalIncentiveDownloadResult: GetDigitalIncentiveDownloadResult | null = null;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                getDigitalIncentiveDownloadResult = GetDigitalIncentiveDownloadResult.PARSE(result);
            }

            cb(err, response, getDigitalIncentiveDownloadResult);
        });
    }

    /**
     * デジタルインセンティブダウンロード情報検索
     *
     * @param {GetDigitalIncentiveDownloadLinkListIn} args
     */
    public getDigitalIncentiveDownloadLinkList(
        params: Object,
        cb: (err: any, response: any, getDigitalIncentiveDownloadLinkListResult: GetDigitalIncentiveDownloadLinkListResult | null) => void
    ): void {
        const method = 'GetDigitalIncentiveDownloadLinkList';

        const args = new GetDigitalIncentiveDownloadLinkListIn(params);

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, null);

            let getDigitalIncentiveDownloadLinkListResult: GetDigitalIncentiveDownloadLinkListResult | null = null;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                getDigitalIncentiveDownloadLinkListResult = GetDigitalIncentiveDownloadLinkListResult.PARSE(result);
            }

            cb(err, response, getDigitalIncentiveDownloadLinkListResult);
        });
    }
}
