"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../../../common/util/Util");
/**
 * 購入情報登録out
 * @class
 */
class RegisterPurchaseInfoResult {
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new RegisterPurchaseInfoResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = Util_1.default.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        });
        return result;
    }
}
exports.default = RegisterPurchaseInfoResult;
