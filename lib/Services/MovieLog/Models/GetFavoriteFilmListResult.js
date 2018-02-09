"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../../../common/util/Util");
/**
 * SkhnInfo
 */
class SkhnInfo {
    static parse(resultObject) {
        const result = new SkhnInfo();
        for (const propertyName in resultObject) {
            const normalizedName = Util_1.Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        }
        return result;
    }
}
exports.SkhnInfo = SkhnInfo;
/**
 * GetFavoriteFilmListResult
 */
class GetFavoriteFilmListResult {
    static parse(resultObject) {
        const result = new GetFavoriteFilmListResult();
        for (const propertyName in resultObject) {
            const normalizedName = Util_1.Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            if (normalizedName === 'skhnInfo') {
                const skhnInfos = [];
                if (property !== null && property.hasOwnProperty('SkhnInfo')) {
                    if (Array.isArray(property.SkhnInfo)) {
                        for (const info of property.SkhnInfo) {
                            skhnInfos.push(SkhnInfo.parse(info));
                        }
                    }
                    else {
                        skhnInfos.push(SkhnInfo.parse(property.SkhnInfo));
                    }
                }
                result[normalizedName] = skhnInfos;
            }
            else {
                result[normalizedName] = property;
            }
        }
        return result;
    }
}
exports.GetFavoriteFilmListResult = GetFavoriteFilmListResult;
