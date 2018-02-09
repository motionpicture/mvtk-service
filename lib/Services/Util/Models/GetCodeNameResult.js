"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../../../common/util/Util");
/**
 * GetCodeNameResult
 */
class GetCodeNameResult {
    static parse(resultObject) {
        const result = new GetCodeNameResult();
        for (const propertyName in resultObject) {
            const normalizedName = Util_1.Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            if (normalizedName === 'typInfo') {
                const typInfos = [];
                if (property !== null && property.hasOwnProperty('TypInfo')) {
                    if (Array.isArray(property.TypInfo)) {
                        for (const info of property.TypInfo) {
                            typInfos.push(info);
                        }
                    }
                    else {
                        typInfos.push(property.TypInfo);
                    }
                }
                result[normalizedName] = typInfos;
            }
            else {
                result[normalizedName] = property;
            }
        }
        return result;
    }
}
exports.GetCodeNameResult = GetCodeNameResult;
