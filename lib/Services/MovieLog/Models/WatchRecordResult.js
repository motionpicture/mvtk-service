"use strict";
const Util_1 = require("../../../common/util/Util");
class watchRecordResult {
    static parse(resultObject) {
        let result = new watchRecordResult();
        for (let propertyName in resultObject) {
            let normalizedName = Util_1.default.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];
            if (normalizedName === 'knshbtskiinknyknshInfo') {
                let infos = [];
                if (property !== null && property.hasOwnProperty('KnshbtskiinknyknshInfo')) {
                    if (Array.isArray(property.KnshbtskiinknyknshInfo)) {
                        for (let info of property.KnshbtskiinknyknshInfo) {
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
    ;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = watchRecordResult;
