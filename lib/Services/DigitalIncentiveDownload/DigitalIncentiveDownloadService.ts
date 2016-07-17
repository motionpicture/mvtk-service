import Service from '../../common/Service';
import Constants from '../../common/util/Constants';
import GetDigitalIncentiveDownloadIn from './Models/GetDigitalIncentiveDownloadIn';
import GetDigitalIncentiveDownloadResult from './Models/GetDigitalIncentiveDownloadResult';
import GetDigitalIncentiveDownloadLinkListIn from './Models/GetDigitalIncentiveDownloadLinkListIn';
import GetDigitalIncentiveDownloadLinkListResult from './Models/GetDigitalIncentiveDownloadLinkListResult';

export default class DigitalIncentiveDownloadService extends Service {
    /**
    * デジタルインセンティブダウンロード
    *
    * @param {GetDigitalIncentiveDownloadIn} args
    */
    public getDigitalIncentiveDownload(params: Object, cb: (err, response, getDigitalIncentiveDownloadResult: GetDigitalIncentiveDownloadResult) => any): void {
        let method = 'GetDigitalIncentiveDownload';

        let args = new GetDigitalIncentiveDownloadIn(params);

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, null);

            let getDigitalIncentiveDownloadResult: GetDigitalIncentiveDownloadResult = null;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                getDigitalIncentiveDownloadResult = GetDigitalIncentiveDownloadResult.parse(result);
            }

            cb(err, response, getDigitalIncentiveDownloadResult);
        });
    }

    /**
     * デジタルインセンティブダウンロード情報検索
     *
     * @param {GetDigitalIncentiveDownloadLinkListIn} args
     */
    public getDigitalIncentiveDownloadLinkList(params: Object, cb: (err, response, getDigitalIncentiveDownloadLinkListResult: GetDigitalIncentiveDownloadLinkListResult) => any): void {
        let method = 'GetDigitalIncentiveDownloadLinkList';

        let args = new GetDigitalIncentiveDownloadLinkListIn(params);

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, null);

            let getDigitalIncentiveDownloadLinkListResult: GetDigitalIncentiveDownloadLinkListResult = null;

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                getDigitalIncentiveDownloadLinkListResult = GetDigitalIncentiveDownloadLinkListResult.parse(result);
            }

            cb(err, response, getDigitalIncentiveDownloadLinkListResult);
        });
    }
}
