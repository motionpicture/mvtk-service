"use strict";
const Service_1 = require("../../Common/Service");
const Constants_1 = require("../../Common/Util/Constants");
const PurchaseNumberAuthIn_1 = require("./Models/PurchaseNumberAuthIn");
const PurchaseNumberAuthResult_1 = require("./Models/PurchaseNumberAuthResult");
/**
 * 購入管理番号認証クラス
 * @class PurchaseNumberAuthService
 * @extends {Service}
 *
 */
class PurchaseNumberAuthService extends Service_1.default {
    /**
     * 購入管理番号認証
     *
     * @param {IPurchaseNumberAuthIn} params 購入管理番号認証in
     * @return {Promise<PurchaseNumberAuthResult[]>} 購入管理番号認証out
     */
    purchaseNumberAuth(params) {
        const method = 'PurchaseNumberAuth';
        return new Promise((resolve, reject) => {
            const args = new PurchaseNumberAuthIn_1.PurchaseNumberAuthIn(params);
            this.call(method, args.toXml(), (err, response, result) => {
                if (err || !response)
                    return reject(err);
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    const purchaseNumberAuthResults = [];
                    if (Array.isArray(result.KNYKNR_NO_INFO_OUT.KnyknrNoInfoOut)) {
                        for (const info of result.KNYKNR_NO_INFO_OUT.KnyknrNoInfoOut) {
                            purchaseNumberAuthResults.push(PurchaseNumberAuthResult_1.default.parse(info));
                        }
                    }
                    else {
                        purchaseNumberAuthResults.push(PurchaseNumberAuthResult_1.default.parse(result.KNYKNR_NO_INFO_OUT.KnyknrNoInfoOut));
                    }
                    return resolve(purchaseNumberAuthResults);
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
            });
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PurchaseNumberAuthService;
