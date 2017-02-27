"use strict";
const Service_1 = require("../../Common/Service");
const Constants_1 = require("../../Common/Util/Constants");
const GetDigitalIncentiveDownloadIn_1 = require("./Models/GetDigitalIncentiveDownloadIn");
const GetDigitalIncentiveDownloadLinkListIn_1 = require("./Models/GetDigitalIncentiveDownloadLinkListIn");
const GetDigitalIncentiveDownloadLinkListResult_1 = require("./Models/GetDigitalIncentiveDownloadLinkListResult");
const GetDigitalIncentiveDownloadResult_1 = require("./Models/GetDigitalIncentiveDownloadResult");
/**
 * DigitalIncentiveDownloadService
 * @class
 */
class DigitalIncentiveDownloadService extends Service_1.default {
    /**
     * デジタルインセンティブダウンロード
     *
     * @param {IGetDigitalIncentiveDownloadIn} args
     */
    getDigitalIncentiveDownload(params, cb) {
        const method = 'GetDigitalIncentiveDownload';
        const args = new GetDigitalIncentiveDownloadIn_1.GetDigitalIncentiveDownloadIn(params);
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, null);
            let getDigitalIncentiveDownloadResult = null;
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                getDigitalIncentiveDownloadResult = GetDigitalIncentiveDownloadResult_1.default.parse(result);
            }
            cb(err, response, getDigitalIncentiveDownloadResult);
        });
    }
    /**
     * デジタルインセンティブダウンロード情報検索
     *
     * @param {IGetDigitalIncentiveDownloadLinkListIn} args
     */
    getDigitalIncentiveDownloadLinkList(params, cb) {
        const method = 'GetDigitalIncentiveDownloadLinkList';
        const args = new GetDigitalIncentiveDownloadLinkListIn_1.GetDigitalIncentiveDownloadLinkListIn(params);
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, null);
            let getDigitalIncentiveDownloadLinkListResult = null;
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                getDigitalIncentiveDownloadLinkListResult = GetDigitalIncentiveDownloadLinkListResult_1.default.parse(result);
            }
            cb(err, response, getDigitalIncentiveDownloadLinkListResult);
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DigitalIncentiveDownloadService;
