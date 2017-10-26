"use strict";
const Service_1 = require("../../common/Service");
const Constants_1 = require("../../common/Util/Constants");
const GetGmoEntryTranIn_1 = require("./Models/GetGmoEntryTranIn");
const GetGmoEntryTranResult_1 = require("./Models/GetGmoEntryTranResult");
const RegisterPurchaseInfoIn_1 = require("./Models/RegisterPurchaseInfoIn");
const RegisterPurchaseInfoResult_1 = require("./Models/RegisterPurchaseInfoResult");
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
    getGmoEntryTran(params, cb) {
        const method = 'GetGmoEntryTran';
        const args = new GetGmoEntryTranIn_1.GetGmoEntryTranIn(params);
        this.call(method, args.toXml(), (err, response, result) => {
            if (err)
                return cb(err, response, null);
            let getGmoEntryTranResult = null;
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                getGmoEntryTranResult = GetGmoEntryTranResult_1.default.parse(result);
            }
            cb(err, response, getGmoEntryTranResult);
        });
    }
    /**
     * 購入情報登録
     *
     * @params {IRegisterPurchaseInfoIn} args
     */
    registerPurchaseInfo(params, cb) {
        const method = 'RegisterPurchaseInfo';
        const args = new RegisterPurchaseInfoIn_1.RegisterPurchaseInfoIn(params);
        this.call(method, args.toXml(), (err, response, result) => {
            if (err)
                return cb(err, response, null);
            let registerPurchaseInfoResult = null;
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                registerPurchaseInfoResult = RegisterPurchaseInfoResult_1.default.parse(result);
            }
            cb(err, response, registerPurchaseInfoResult);
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PurchaseService2;
