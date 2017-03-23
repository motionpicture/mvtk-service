"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * 作品画像out
 * @class
 */
class FilmPhotoGalleryResult {
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {FilmPhotoGalleryResult} 作品画像out
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new FilmPhotoGalleryResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        });
        return result;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FilmPhotoGalleryResult;
