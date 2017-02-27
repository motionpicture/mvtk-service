"use strict";
const CommonUtil = require("../../../Common/Util/Util");
const InvalidTicketResult_1 = require("./InvalidTicketResult");
const ValidTickettResult_1 = require("./ValidTickettResult");
/**
 * 購入管理番号認証out
 * @class PurchaseNumberAuthResult
 */
class PurchaseNumberAuthResult {
    /**
     * データ整形
     *
     * @param {any} resultObject
     * @returns {PurchaseNumberAuthResult} 購入管理番号認証out
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const purchaseNumberAuthResult = new PurchaseNumberAuthResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            if (normalizedName === 'ykknInfo') {
                const ykknInfos = [];
                if (property !== null && property.hasOwnProperty('YkknInfo')) {
                    if (Array.isArray(property.YkknInfo)) {
                        for (const info of property.YkknInfo) {
                            ykknInfos.push(ValidTickettResult_1.default.parse(info));
                        }
                    }
                    else {
                        ykknInfos.push(ValidTickettResult_1.default.parse(property.YkknInfo));
                    }
                }
                purchaseNumberAuthResult[normalizedName] = ykknInfos;
            }
            else if (normalizedName === 'mkknInfo') {
                const mkknInfos = [];
                if (property !== null && property.hasOwnProperty('MkknInfo')) {
                    if (Array.isArray(property.MkknInfo)) {
                        for (const info of property.MkknInfo) {
                            mkknInfos.push(InvalidTicketResult_1.default.parse(info));
                        }
                    }
                    else {
                        mkknInfos.push(InvalidTicketResult_1.default.parse(property.MkknInfo));
                    }
                }
                purchaseNumberAuthResult[normalizedName] = mkknInfos;
            }
            else {
                purchaseNumberAuthResult[normalizedName] = property;
            }
        });
        return purchaseNumberAuthResult;
    }
    ;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PurchaseNumberAuthResult;
