"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * デジタルインセンティブダウンロードout
 */
class GetDigitalIncentiveDownloadResult {
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {GetDigitalIncentiveDownloadResult} デジタルインセンティブダウンロードout
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new GetDigitalIncentiveDownloadResult();
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
exports.default = GetDigitalIncentiveDownloadResult;
