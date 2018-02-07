"use strict";
const Util_1 = require("../../../common/util/Util");
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
            const normalizedName = Util_1.default.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        });
        return result;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FilmGenreResult;
