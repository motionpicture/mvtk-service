"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../../../common/util/Util");
class GetCodeNameResult {
    static parse(resultObject) {
        let result = new GetCodeNameResult();
        for (let propertyName in resultObject) {
            let normalizedName = Util_1.default.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];
            if (normalizedName === 'typInfo') {
                let typInfos = [];
                if (property !== null && property.hasOwnProperty('TypInfo')) {
                    if (Array.isArray(property.TypInfo)) {
                        for (let info of property.TypInfo) {
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
exports.default = GetCodeNameResult;
