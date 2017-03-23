"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * 会員情報照会out
 * @class
 */
class MemberInfoResult {
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {MemberInfoResult} 会員情報照会out
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const memberInfoResult = new MemberInfoResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            memberInfoResult[normalizedName] = property;
        });
        return memberInfoResult;
    }
    ;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MemberInfoResult;
