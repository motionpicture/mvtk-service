"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * 作品詳細情報out
 * @class
 */
class FilmResult {
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {FilmResult} 作品詳細情報out
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new FilmResult();
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
exports.default = FilmResult;
