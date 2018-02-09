"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../../../common/util/Util");
/**
 * SentGiftStatusListResult
 */
class SentGiftStatusListResult {
    static parse(resultObject) {
        const result = new SentGiftStatusListResult();
        for (const propertyName in resultObject) {
            const normalizedName = Util_1.Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            if (normalizedName === 'knshbtskiinknygftInfo') {
                const infos = [];
                if (property !== null && property.hasOwnProperty('KnshbtskiinknygftInfo')) {
                    if (Array.isArray(property.KnshbtskiinknygftInfo)) {
                        for (const info of property.KnshbtskiinknygftInfo) {
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
}
exports.SentGiftStatusListResult = SentGiftStatusListResult;
