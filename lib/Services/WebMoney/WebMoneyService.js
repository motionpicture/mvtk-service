"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Service_1 = require("../../common/Service");
const Constants_1 = require("../../common/util/Constants");
const WebMoneyEntryIn_1 = require("./models/WebMoneyEntryIn");
const WebMoneyEntryResult_1 = require("./models/WebMoneyEntryResult");
const DecryptWebMoneyKssiInfoResult_1 = require("./models/DecryptWebMoneyKssiInfoResult");
class WebMoneyService extends Service_1.default {
    /**
     * WebMoney決済実行
     *
     * @param {WebMoneyEntryIn} webMoneyEntryIn
     */
    webMoneyEntry(params) {
        let method = 'WebMoneyEntry';
        let args = new WebMoneyEntryIn_1.default(params);
        let message = args.toXml();
        return new Promise((resolve, reject) => {
            this.call(method, message, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let webMoneyEntryResult = null;
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    webMoneyEntryResult = WebMoneyEntryResult_1.default.parse(result);
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: webMoneyEntryResult
                });
            });
        });
    }
    /**
     * WebMoney決済情報複合化
     *
     * @param {string} encryptedKssiInfo
     */
    decryptWebMoneyKssiInfo(encryptedKssiInfo) {
        let method = 'DecryptWebMoneyKssiInfo';
        let args = {
            encryptedKssiInfo: encryptedKssiInfo
        };
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let decryptWebMoneyKssiInfoResult = null;
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    decryptWebMoneyKssiInfoResult = DecryptWebMoneyKssiInfoResult_1.default.parse(result);
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: decryptWebMoneyKssiInfoResult
                });
            });
        });
    }
}
exports.default = WebMoneyService;
