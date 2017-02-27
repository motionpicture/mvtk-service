"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * 有効券情報
 * @class ValidTickettResult
 */
class ValidTickettResult {
    /**
     * データ整形
     *
     * @param {any} resultObject
     * @returns {ValidTickettResult} ValidTickettResultout
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new ValidTickettResult();
        Object.keys(resultObject).forEach((value) => {
            const propertyName = value;
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        });
        return result;
    }
    ;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ValidTickettResult;
