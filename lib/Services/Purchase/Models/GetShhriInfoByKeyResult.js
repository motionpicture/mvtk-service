"use strict";
const Util_1 = require("../../../common/util/Util");
class GetShhriInfoByKeyResult {
    static parse(resultObject) {
        let result = new GetShhriInfoByKeyResult();
        for (let propertyName in resultObject) {
            let normalizedName = Util_1.default.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];
            result[normalizedName] = property;
        }
        return result;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GetShhriInfoByKeyResult;
