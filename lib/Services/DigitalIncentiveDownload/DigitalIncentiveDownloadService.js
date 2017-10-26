"use strict";
const Service_1 = require("../../common/Service");
const Constants_1 = require("../../common/util/Constants");
const GetDigitalIncentiveDownloadIn_1 = require("./Models/GetDigitalIncentiveDownloadIn");
const GetDigitalIncentiveDownloadResult_1 = require("./Models/GetDigitalIncentiveDownloadResult");
const GetDigitalIncentiveDownloadLinkListIn_1 = require("./Models/GetDigitalIncentiveDownloadLinkListIn");
const GetDigitalIncentiveDownloadLinkListResult_1 = require("./Models/GetDigitalIncentiveDownloadLinkListResult");
class DigitalIncentiveDownloadService extends Service_1.default {
    /**
    * デジタルインセンティブダウンロード
    *
    * @param {GetDigitalIncentiveDownloadIn} args
    */
    getDigitalIncentiveDownload(params, cb) {
        let method = 'GetDigitalIncentiveDownload';
        let args = new GetDigitalIncentiveDownloadIn_1.default(params);
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
     * @param {GetDigitalIncentiveDownloadLinkListIn} args
     */
    getDigitalIncentiveDownloadLinkList(params, cb) {
        let method = 'GetDigitalIncentiveDownloadLinkList';
        let args = new GetDigitalIncentiveDownloadLinkListIn_1.default(params);
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
