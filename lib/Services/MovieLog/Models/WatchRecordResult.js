"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../../../common/util/Util");
/**
 * watchRecordResult
 */
class WatchRecordResult {
    static parse(resultObject) {
        const result = new WatchRecordResult();
        for (const propertyName in resultObject) {
            const normalizedName = Util_1.Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            if (normalizedName === 'knshbtskiinknyknshInfo') {
                const infos = [];
                if (property !== null && property.hasOwnProperty('KnshbtskiinknyknshInfo')) {
                    if (Array.isArray(property.KnshbtskiinknyknshInfo)) {
                        for (const info of property.KnshbtskiinknyknshInfo) {
                            infos.push(info);
                        }
                    }
                    else {
                        infos.push(property.KnshbtskiinknyknshInfo);
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
exports.WatchRecordResult = WatchRecordResult;
