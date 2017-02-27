"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * MkknInfoResultout
 * @class MkknInfoResult
 */
class MkknInfoResult {
    /**
     * データ整形
     *
     * @param {any} resultObject
     * @returns {MkknInfoResult} MkknInfoResultout
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new MkknInfoResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        });
        return result;
    }
    ;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MkknInfoResult;
