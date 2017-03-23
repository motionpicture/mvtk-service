"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * 作品ジャンルout
 * @class
 */
class FilmGenreResult {
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {FilmGenreResult} 作品ジャンルout
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new FilmGenreResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        });
        return result;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FilmGenreResult;
