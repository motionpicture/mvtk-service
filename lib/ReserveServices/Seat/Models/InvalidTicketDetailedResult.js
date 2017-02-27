"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * 無効券詳細情報out
 * @class InvalidTicketDetailedResult
 */
class InvalidTicketDetailedResult {
    /**
     * データ整形
     *
     * @param {any} resultObject
     * @returns {InvalidTicketDetailedResult} 無効券詳細情報out
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new InvalidTicketDetailedResult();
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
exports.default = InvalidTicketDetailedResult;
