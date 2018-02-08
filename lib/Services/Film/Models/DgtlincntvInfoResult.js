"use strict";
const Util_1 = require("../../../common/util/Util");
/**
 * 特典取得out
 * @class
 */
class DgtlincntvInfoResult {
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {DgtlincntvInfoResult} 特典取得out
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new DgtlincntvInfoResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = Util_1.default.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        });
        return result;
    }
    ;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DgtlincntvInfoResult;
