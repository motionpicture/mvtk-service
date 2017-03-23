"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * 無効券種情報out
 * @class InvalidNoteTypeResult
 */
class InvalidNoteTypeResult {
    /**
     * データ整形
     *
     * @param {any} resultObject
     * @returns {InvalidNoteTypeResult} 無効券種情報out
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new InvalidNoteTypeResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        });
        return result;
    }
    ;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = InvalidNoteTypeResult;
