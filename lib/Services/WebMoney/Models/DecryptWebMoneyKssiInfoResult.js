"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../../../common/util/Util");
class DecryptWebMoneyKssiInfoResult {
    static parse(resultObject) {
        let result = new DecryptWebMoneyKssiInfoResult();
        for (let propertyName in resultObject) {
            let normalizedName = Util_1.default.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];
            result[normalizedName] = property;
        }
        return result;
    }
}
exports.default = DecryptWebMoneyKssiInfoResult;
