"use strict";
const Util_1 = require("../../../common/util/Util");
class MemberInfoResult {
    static parse(resultObject) {
        let memberInfoResult = new MemberInfoResult();
        for (let propertyName in resultObject) {
            let normalizedName = Util_1.default.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];
            memberInfoResult[normalizedName] = property;
        }
        return memberInfoResult;
    }
    ;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MemberInfoResult;
