"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * 鑑賞券明細情報out
 * @class
 */
class TicketInfoTypeResult {
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {TicketInfoTypeResult} 鑑賞券明細情報out
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new TicketInfoTypeResult();
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
exports.default = TicketInfoTypeResult;