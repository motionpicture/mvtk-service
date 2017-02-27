"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * 無効券情報
 * @class InvalidTicketResult
 */
class InvalidTicketResult {
    /**
     * データ整形
     *
     * @param {any} resultObject
     * @returns {InvalidTicketResult} InvalidTicketResultout
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new InvalidTicketResult();
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
exports.default = InvalidTicketResult;
