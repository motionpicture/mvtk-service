"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * 予告編取得out
 * @class
 */
class GetTrailerDetailResult {
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {GetTrailerDetailResult} 予告編取得out
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new GetTrailerDetailResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
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
    ;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GetTrailerDetailResult;
