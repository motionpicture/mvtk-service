
import { Service } from '../../common/Service';
import { Constants } from '../../common/util/Constants';
import { GetDigitalIncentiveDownloadIn } from './models/GetDigitalIncentiveDownloadIn';
import { GetDigitalIncentiveDownloadLinkListIn } from './models/GetDigitalIncentiveDownloadLinkListIn';
import { GetDigitalIncentiveDownloadLinkListResult } from './models/GetDigitalIncentiveDownloadLinkListResult';
import { GetDigitalIncentiveDownloadResult } from './models/GetDigitalIncentiveDownloadResult';

/**
 * DigitalIncentiveDownloadService
 */
export class DigitalIncentiveDownloadService extends Service {
    /**
     * デジタルインセンティブダウンロード
     */
    public async getDigitalIncentiveDownload(params: Object) {
        const method = 'GetDigitalIncentiveDownload';
        const args = new GetDigitalIncentiveDownloadIn(params);

        return new Promise<{
            response: any;
            result: GetDigitalIncentiveDownloadResult;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }
                let getDigitalIncentiveDownloadResult: GetDigitalIncentiveDownloadResult;
                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    getDigitalIncentiveDownloadResult = GetDigitalIncentiveDownloadResult.parse(result);
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
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
     */
    public async getDigitalIncentiveDownloadLinkList(params: Object) {
        const method = 'GetDigitalIncentiveDownloadLinkList';

        const args = new GetDigitalIncentiveDownloadLinkListIn(params);

        return new Promise<{
            response: any;
            result: GetDigitalIncentiveDownloadLinkListResult;
        }>((resolve, reject) => {
            this.call(method, args, (err: any, response: any, result: any) => {
                if (err) {
                    reject(err);

                    return;
                }
                let getDigitalIncentiveDownloadLinkListResult: GetDigitalIncentiveDownloadLinkListResult;
                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    getDigitalIncentiveDownloadLinkListResult = GetDigitalIncentiveDownloadLinkListResult.parse(result);
                } else {
                    reject(new Error(result.RESULT_INFO.MESSAGE));

                    return;
                }
                resolve({
                    response: response,
                    result: getDigitalIncentiveDownloadLinkListResult
                });
            });
        });
    }
}
