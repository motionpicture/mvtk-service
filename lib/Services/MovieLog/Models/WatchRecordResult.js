"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * 鑑賞記録リスト検索out
 * @class WatchRecordResult
 */
class WatchRecordResult {
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {WatchRecordResult} 鑑賞記録リスト検索out
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new WatchRecordResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
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
        });
        return result;
    }
    ;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WatchRecordResult;
