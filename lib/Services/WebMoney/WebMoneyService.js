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
const DecryptWebMoneyKssiInfoResult_1 = require("./models/DecryptWebMoneyKssiInfoResult");
const WebMoneyEntryIn_1 = require("./models/WebMoneyEntryIn");
const WebMoneyEntryResult_1 = require("./models/WebMoneyEntryResult");
/**
 * WebMoneyService
 */
class WebMoneyService extends Service_1.Service {
    /**
     * WebMoney決済実行
     *
     */
    webMoneyEntry(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'WebMoneyEntry';
            const args = new WebMoneyEntryIn_1.WebMoneyEntryIn(params);
            const message = args.toXml();
            return new Promise((resolve, reject) => {
                this.call(method, message, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    let webMoneyEntryResult;
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        webMoneyEntryResult = WebMoneyEntryResult_1.WebMoneyEntryResult.parse(result);
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: webMoneyEntryResult
                    });
                });
            });
        });
    }
    /**
     * WebMoney決済情報複合化
     *
     */
    decryptWebMoneyKssiInfo(encryptedKssiInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'DecryptWebMoneyKssiInfo';
            const args = {
                encryptedKssiInfo: encryptedKssiInfo
            };
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    let decryptWebMoneyKssiInfoResult;
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        decryptWebMoneyKssiInfoResult = DecryptWebMoneyKssiInfoResult_1.DecryptWebMoneyKssiInfoResult.parse(result);
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: decryptWebMoneyKssiInfoResult
                    });
                });
            });
        });
    }
}
exports.WebMoneyService = WebMoneyService;
