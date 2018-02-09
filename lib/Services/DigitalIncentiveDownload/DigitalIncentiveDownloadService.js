"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Service_1 = require("../../common/Service");
const Constants_1 = require("../../common/util/Constants");
const GetDigitalIncentiveDownloadIn_1 = require("./models/GetDigitalIncentiveDownloadIn");
const GetDigitalIncentiveDownloadLinkListIn_1 = require("./models/GetDigitalIncentiveDownloadLinkListIn");
const GetDigitalIncentiveDownloadLinkListResult_1 = require("./models/GetDigitalIncentiveDownloadLinkListResult");
const GetDigitalIncentiveDownloadResult_1 = require("./models/GetDigitalIncentiveDownloadResult");
/**
 * DigitalIncentiveDownloadService
 */
class DigitalIncentiveDownloadService extends Service_1.Service {
    /**
     * デジタルインセンティブダウンロード
     */
    getDigitalIncentiveDownload(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'GetDigitalIncentiveDownload';
            const args = new GetDigitalIncentiveDownloadIn_1.GetDigitalIncentiveDownloadIn(params);
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    let getDigitalIncentiveDownloadResult;
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        getDigitalIncentiveDownloadResult = GetDigitalIncentiveDownloadResult_1.GetDigitalIncentiveDownloadResult.parse(result);
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: getDigitalIncentiveDownloadResult
                    });
                });
            });
        });
    }
    /**
     * デジタルインセンティブダウンロード情報検索
     *
     */
    getDigitalIncentiveDownloadLinkList(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'GetDigitalIncentiveDownloadLinkList';
            const args = new GetDigitalIncentiveDownloadLinkListIn_1.GetDigitalIncentiveDownloadLinkListIn(params);
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    let getDigitalIncentiveDownloadLinkListResult;
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        getDigitalIncentiveDownloadLinkListResult = GetDigitalIncentiveDownloadLinkListResult_1.GetDigitalIncentiveDownloadLinkListResult.parse(result);
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: getDigitalIncentiveDownloadLinkListResult
                    });
                });
            });
        });
    }
}
exports.DigitalIncentiveDownloadService = DigitalIncentiveDownloadService;
