"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * WebMoney決済情報複合化out
 * @class
 */
class DecryptWebMoneyKssiInfoResult {
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new DecryptWebMoneyKssiInfoResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        });
        return result;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DecryptWebMoneyKssiInfoResult;
