import Service from '../../Common/Service';
import Constants from '../../Common/Util/Constants';
import {GetDigitalIncentiveDownloadIn, IGetDigitalIncentiveDownloadIn} from './Models/GetDigitalIncentiveDownloadIn';
import {
    GetDigitalIncentiveDownloadLinkListIn,
    IGetDigitalIncentiveDownloadLinkListIn
} from './Models/GetDigitalIncentiveDownloadLinkListIn';
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
    public getDigitalIncentiveDownload(
        params: IGetDigitalIncentiveDownloadIn,
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
     * @method
     * @param {IGetDigitalIncentiveDownloadLinkListIn} args
     */
    public getDigitalIncentiveDownloadLinkList(
        params: IGetDigitalIncentiveDownloadLinkListIn,
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
