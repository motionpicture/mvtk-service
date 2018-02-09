"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../../../common/util/Util");
/**
 * 作品画像out
 */
class FilmPhotoGalleryResult {
    /**
     * データ整形
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new FilmPhotoGalleryResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = Util_1.Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        });
        return result;
    }
}
exports.FilmPhotoGalleryResult = FilmPhotoGalleryResult;
