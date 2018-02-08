"use strict";
const Util_1 = require("../../../common/util/Util");
/**
 * 作品キャストout
 * @class
 */
class FilmCastResult {
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {FilmCastResult} 作品キャストout
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new FilmCastResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = Util_1.default.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        });
        return result;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FilmCastResult;
