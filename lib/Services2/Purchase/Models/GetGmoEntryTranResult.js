"use strict";
const Util_1 = require("../../../common/util/Util");
/**
 * 代行会社取引登録呼出out
 * @class
 */
class GetGmoEntryTranResult {
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new GetGmoEntryTranResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = Util_1.default.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        });
        return result;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GetGmoEntryTranResult;
