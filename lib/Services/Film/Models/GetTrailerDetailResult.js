"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../../../common/util/Util");
/**
 * 予告編取得out
 */
class GetTrailerDetailResult {
    /**
     * データ整形
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new GetTrailerDetailResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = Util_1.Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            if (normalizedName === 'ykkhnInfo') {
                const ykkhnInfos = [];
                if (property !== null && property.hasOwnProperty('YkkhnInfo')) {
                    if (Array.isArray(property.YkkhnInfo)) {
                        for (const info of property.YkkhnInfo) {
                            ykkhnInfos.push(info);
                        }
                    }
                    else {
                        ykkhnInfos.push(property.YkkhnInfo);
                    }
                }
                result[normalizedName] = ykkhnInfos;
            }
            else {
                result[normalizedName] = property;
            }
        });
        return result;
    }
}
exports.GetTrailerDetailResult = GetTrailerDetailResult;
