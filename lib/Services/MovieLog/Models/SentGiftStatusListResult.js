"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * ギフト送信状況リスト検索out
 */
class SentGiftStatusListResult {
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {SentGiftStatusListResult} ギフト送信状況リスト検索out
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new SentGiftStatusListResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
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
        });
        return result;
    }
    ;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SentGiftStatusListResult;
