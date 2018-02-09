"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../../../common/util/Util");
/**
 * 鑑賞券明細情報out
 */
class TicketInfoTypeResult {
    /**
     * データ整形
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new TicketInfoTypeResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = Util_1.Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        });
        return result;
    }
}
exports.TicketInfoTypeResult = TicketInfoTypeResult;
