"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * バナーリスト取得out
 */
class BnnrInfoResult {
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {BnnrInfoResult} バナーリスト取得out
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new BnnrInfoResult();
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
exports.default = BnnrInfoResult;
