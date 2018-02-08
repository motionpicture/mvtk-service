import Service from '../../common/Service';
import Constants from '../../common/util/Constants';
import GetDigitalIncentiveDownloadIn from './models/GetDigitalIncentiveDownloadIn';
import GetDigitalIncentiveDownloadResult from './models/GetDigitalIncentiveDownloadResult';
import GetDigitalIncentiveDownloadLinkListIn from './models/GetDigitalIncentiveDownloadLinkListIn';
import GetDigitalIncentiveDownloadLinkListResult from './models/GetDigitalIncentiveDownloadLinkListResult';

export default class DigitalIncentiveDownloadService extends Service {
    /**
    * デジタルインセンティブダウンロード
    *
    * @param {GetDigitalIncentiveDownloadIn} args
    */
    public getDigitalIncentiveDownload(params: Object) {
        let method = 'GetDigitalIncentiveDownload';
        let args = new GetDigitalIncentiveDownloadIn(params);
        return new Promise<{
            response: any;
            result: GetDigitalIncentiveDownloadResult;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let getDigitalIncentiveDownloadResult: GetDigitalIncentiveDownloadResult = null;
                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    getDigitalIncentiveDownloadResult = GetDigitalIncentiveDownloadResult.parse(result);
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: getDigitalIncentiveDownloadResult
                });
            });
        });
    }

    /**
     * デジタルインセンティブダウンロード情報検索
     *
     * @param {GetDigitalIncentiveDownloadLinkListIn} args
     */
    public getDigitalIncentiveDownloadLinkList(params: Object) {
        let method = 'GetDigitalIncentiveDownloadLinkList';

        let args = new GetDigitalIncentiveDownloadLinkListIn(params);
        return new Promise<{
            response: any;
            result: GetDigitalIncentiveDownloadLinkListResult;
        }>((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let getDigitalIncentiveDownloadLinkListResult: GetDigitalIncentiveDownloadLinkListResult = null;
                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    getDigitalIncentiveDownloadLinkListResult = GetDigitalIncentiveDownloadLinkListResult.parse(result);
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: getDigitalIncentiveDownloadLinkListResult
                });
            });
        });
    }
}
