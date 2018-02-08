"use strict";
const Util_1 = require("../../../common/util/Util");
class SentGiftStatusListResult {
    static parse(resultObject) {
        let result = new SentGiftStatusListResult();
        for (let propertyName in resultObject) {
            let normalizedName = Util_1.default.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];
            if (normalizedName === 'knshbtskiinknygftInfo') {
                let infos = [];
                if (property !== null && property.hasOwnProperty('KnshbtskiinknygftInfo')) {
                    if (Array.isArray(property.KnshbtskiinknygftInfo)) {
                        for (let info of property.KnshbtskiinknygftInfo) {
                            infos.push(info);
                        }
                    }
                    else {
                        infos.push(property.KnshbtskiinknygftInfo);
                    }
                }
                result[normalizedName] = infos;
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
exports.default = SentGiftStatusListResult;
