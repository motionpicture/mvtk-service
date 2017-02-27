"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * YkknInfoResultout
 * @class YkknInfoResult
 */
class YkknInfoResult {
    /**
     * データ整形
     *
     * @param {any} resultObject
     * @returns {YkknInfoResult} YkknInfoResultout
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new YkknInfoResult();
        Object.keys(resultObject).forEach((value) => {
            const propertyName = value;
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        });
        return result;
    }
    ;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = YkknInfoResult;
