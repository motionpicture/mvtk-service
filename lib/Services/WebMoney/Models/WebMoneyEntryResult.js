"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../../../common/util/Util");
/**
 * WebMoneyEntryResult
 */
class WebMoneyEntryResult {
    static parse(resultObject) {
        const result = new WebMoneyEntryResult();
        for (const propertyName in resultObject) {
            const normalizedName = Util_1.Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        }
        return result;
    }
}
exports.WebMoneyEntryResult = WebMoneyEntryResult;
