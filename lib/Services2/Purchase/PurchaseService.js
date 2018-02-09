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
const GetGmoEntryTranIn_1 = require("./models/GetGmoEntryTranIn");
const GetGmoEntryTranResult_1 = require("./models/GetGmoEntryTranResult");
const RegisterPurchaseInfoIn_1 = require("./models/RegisterPurchaseInfoIn");
const RegisterPurchaseInfoResult_1 = require("./models/RegisterPurchaseInfoResult");
/**
 * PurchaseService2
 * @extends {Service}
 */
class PurchaseService2 extends Service_1.Service {
    /**
     * 代行会社取引登録呼出
     */
    getGmoEntryTran(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'GetGmoEntryTran';
            const args = new GetGmoEntryTranIn_1.GetGmoEntryTranIn(params);
            const message = args.toXml();
            return new Promise((resolve, reject) => {
                this.call(method, message, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    let getGmoEntryTranResult = null;
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        getGmoEntryTranResult = GetGmoEntryTranResult_1.GetGmoEntryTranResult.parse(result);
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: getGmoEntryTranResult
                    });
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
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'RegisterPurchaseInfo';
            const args = new RegisterPurchaseInfoIn_1.RegisterPurchaseInfoIn(params);
            const message = args.toXml();
            return new Promise((resolve, reject) => {
                this.call(method, message, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    let registerPurchaseInfoResult = null;
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        registerPurchaseInfoResult = RegisterPurchaseInfoResult_1.RegisterPurchaseInfoResult.parse(result);
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: registerPurchaseInfoResult
                    });
                });
            });
        });
    }
}
exports.PurchaseService2 = PurchaseService2;
