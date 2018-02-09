"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../../../common/util/Util");
/**
 * MemberInfoResult
 */
class MemberInfoResult {
    static parse(resultObject) {
        const memberInfoResult = new MemberInfoResult();
        for (const propertyName in resultObject) {
            const normalizedName = Util_1.Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            memberInfoResult[normalizedName] = property;
        }
        return memberInfoResult;
    }
}
exports.MemberInfoResult = MemberInfoResult;
