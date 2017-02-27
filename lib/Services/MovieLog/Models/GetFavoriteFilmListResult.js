"use strict";
const CommonUtil = require("../../../Common/Util/Util");
const FilmResult_1 = require("./FilmResult");
/**
 * 観たい作品検索out
 * @class
 */
class GetFavoriteFilmListResult {
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {GetFavoriteFilmListResult} 観たい作品検索out
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new GetFavoriteFilmListResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            if (normalizedName === 'skhnInfo') {
                const skhnInfos = [];
                if (property !== null && property.hasOwnProperty('SkhnInfo')) {
                    if (Array.isArray(property.SkhnInfo)) {
                        for (const info of property.SkhnInfo) {
                            skhnInfos.push(FilmResult_1.default.parse(info));
                        }
                    }
                    else {
                        skhnInfos.push(FilmResult_1.default.parse(property.SkhnInfo));
                    }
                }
                result[normalizedName] = skhnInfos;
            }
            else {
                result[normalizedName] = property;
            }
        });
        return result;
    }
    ;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GetFavoriteFilmListResult;
