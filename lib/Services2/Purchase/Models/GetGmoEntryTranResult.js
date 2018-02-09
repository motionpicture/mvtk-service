"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../../../common/util/Util");
/**
 * 代行会社取引登録呼出out
 */
class GetGmoEntryTranResult {
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new GetGmoEntryTranResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = Util_1.Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        });
        return result;
    }
}
exports.GetGmoEntryTranResult = GetGmoEntryTranResult;
