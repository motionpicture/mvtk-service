"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../../../common/util/Util");
/**
 * GetTsuryShhziInfoResult
 */
class GetTsuryShhziInfoResult {
    static parse(resultObject) {
        const result = new GetTsuryShhziInfoResult();
        for (const propertyName in resultObject) {
            const normalizedName = Util_1.Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        }
        return result;
    }
}
exports.GetTsuryShhziInfoResult = GetTsuryShhziInfoResult;
