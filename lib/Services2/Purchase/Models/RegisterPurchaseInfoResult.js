"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * 購入情報登録out
 * @class
 */
class RegisterPurchaseInfoResult {
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new RegisterPurchaseInfoResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        });
        return result;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RegisterPurchaseInfoResult;
