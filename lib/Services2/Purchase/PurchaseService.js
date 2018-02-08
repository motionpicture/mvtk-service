"use strict";
const Service_1 = require("../../common/Service");
const Constants_1 = require("../../common/Util/Constants");
const GetGmoEntryTranIn_1 = require("./models/GetGmoEntryTranIn");
const GetGmoEntryTranResult_1 = require("./models/GetGmoEntryTranResult");
const RegisterPurchaseInfoIn_1 = require("./models/RegisterPurchaseInfoIn");
const RegisterPurchaseInfoResult_1 = require("./models/RegisterPurchaseInfoResult");
/**
 * PurchaseService2
 * @class
 * @extends {Service}
 */
class PurchaseService2 extends Service_1.default {
    /**
     * 代行会社取引登録呼出
     *
     * @param {IGetGmoEntryTranIn} args
     */
    getGmoEntryTran(params) {
        const method = 'GetGmoEntryTran';
        const args = new GetGmoEntryTranIn_1.GetGmoEntryTranIn(params);
        const message = args.toXml();
        return new Promise((resolve, reject) => {
            this.call(method, message, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let getGmoEntryTranResult = null;
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    getGmoEntryTranResult = GetGmoEntryTranResult_1.default.parse(result);
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: getGmoEntryTranResult
                });
            });
        });
    }
    /**
     * 購入情報登録
     *
     * @params {IRegisterPurchaseInfoIn} args
     */
    registerPurchaseInfo(params) {
        const method = 'RegisterPurchaseInfo';
        const args = new RegisterPurchaseInfoIn_1.RegisterPurchaseInfoIn(params);
        const message = args.toXml();
        return new Promise((resolve, reject) => {
            this.call(method, message, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let registerPurchaseInfoResult = null;
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    registerPurchaseInfoResult = RegisterPurchaseInfoResult_1.default.parse(result);
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: registerPurchaseInfoResult
                });
            });
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PurchaseService2;
