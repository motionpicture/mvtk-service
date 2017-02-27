"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * 手数料・消費税情報取得out
 * @class
 */
class GetTsuryShhziInfoResult {
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new GetTsuryShhziInfoResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        });
        return result;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GetTsuryShhziInfoResult;
