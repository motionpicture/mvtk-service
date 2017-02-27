"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * 代行会社取引登録呼出out
 * @class
 */
class GetGmoEntryTranResult {
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new GetGmoEntryTranResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        });
        return result;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GetGmoEntryTranResult;
