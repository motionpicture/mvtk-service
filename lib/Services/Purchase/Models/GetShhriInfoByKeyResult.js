"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * 支払先情報取得out
 * @class
 */
class GetShhriInfoByKeyResult {
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new GetShhriInfoByKeyResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        });
        return result;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GetShhriInfoByKeyResult;
