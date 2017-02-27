"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * WebMoney決済実行out
 * @class
 */
class WebMoneyEntryResult {
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new WebMoneyEntryResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        });
        return result;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WebMoneyEntryResult;
