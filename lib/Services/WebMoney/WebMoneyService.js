"use strict";
const Service_1 = require("../../common/Service");
const Constants_1 = require("../../common/util/Constants");
const WebMoneyEntryIn_1 = require("./Models/WebMoneyEntryIn");
const WebMoneyEntryResult_1 = require("./Models/WebMoneyEntryResult");
const DecryptWebMoneyKssiInfoResult_1 = require("./Models/DecryptWebMoneyKssiInfoResult");
class WebMoneyService extends Service_1.default {
    /**
     * WebMoney決済実行
     *
     * @param {WebMoneyEntryIn} webMoneyEntryIn
     */
    webMoneyEntry(params, cb) {
        let method = 'WebMoneyEntry';
        let args = new WebMoneyEntryIn_1.default(params);
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
        let method = 'DecryptWebMoneyKssiInfo';
        let args = {
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
