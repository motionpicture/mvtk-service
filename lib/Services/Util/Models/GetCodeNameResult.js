"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * 各種コード検索out
 * @class
 */
class GetCodeNameResult {
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new GetCodeNameResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
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
        });
        return result;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GetCodeNameResult;
