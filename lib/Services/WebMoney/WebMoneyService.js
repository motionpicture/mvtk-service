"use strict";
const Service_1 = require("../../Common/Service");
const Constants_1 = require("../../Common/Util/Constants");
const DecryptWebMoneyKssiInfoResult_1 = require("./Models/DecryptWebMoneyKssiInfoResult");
const WebMoneyEntryIn_1 = require("./Models/WebMoneyEntryIn");
const WebMoneyEntryResult_1 = require("./Models/WebMoneyEntryResult");
/**
 * WebMoneyService
 * @class
 * @extends {Service}
 */
class WebMoneyService extends Service_1.default {
    /**
     * WebMoney決済実行
     *
     * @param {IWebMoneyEntryIn} webMoneyEntryIn
     */
    webMoneyEntry(params, cb) {
        const method = 'WebMoneyEntry';
        const args = new WebMoneyEntryIn_1.WebMoneyEntryIn(params);
        this.call(method, args.toXml(), (err, response, result) => {
            if (err)
                return cb(err, response, null);
            let webMoneyEntryResult = null;
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                webMoneyEntryResult = WebMoneyEntryResult_1.default.parse(result);
            }
            cb(err, response, webMoneyEntryResult);
        });
    }
    /**
     * WebMoney決済情報複合化
     *
     * @param {string} encryptedKssiInfo
     */
    decryptWebMoneyKssiInfo(encryptedKssiInfo, cb) {
        const method = 'DecryptWebMoneyKssiInfo';
        const args = {
            encryptedKssiInfo: encryptedKssiInfo
        };
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, null);
            let decryptWebMoneyKssiInfoResult = null;
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                decryptWebMoneyKssiInfoResult = DecryptWebMoneyKssiInfoResult_1.default.parse(result);
            }
            cb(err, response, decryptWebMoneyKssiInfoResult);
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WebMoneyService;
