"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * 作品スタッフout
 * @class
 */
class FilmStaffResult {
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {FilmStaffResult} 作品スタッフout
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new FilmStaffResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        });
        return result;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FilmStaffResult;
