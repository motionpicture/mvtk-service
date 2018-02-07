"use strict";
const Util_1 = require("../../../common/util/Util");
class SkhnInfo {
    static parse(resultObject) {
        let result = new SkhnInfo();
        for (let propertyName in resultObject) {
            let normalizedName = Util_1.default.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];
            result[normalizedName] = property;
        }
        return result;
    }
    ;
}
exports.SkhnInfo = SkhnInfo;
class GetFavoriteFilmListResult {
    static parse(resultObject) {
        let result = new GetFavoriteFilmListResult();
        for (let propertyName in resultObject) {
            let normalizedName = Util_1.default.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];
            if (normalizedName === 'skhnInfo') {
                let skhnInfos = [];
                if (property !== null && property.hasOwnProperty('SkhnInfo')) {
                    if (Array.isArray(property.SkhnInfo)) {
                        for (let info of property.SkhnInfo) {
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
    ;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GetFavoriteFilmListResult;
