"use strict";
const CommonUtil = require("../../../Common/Util/Util");
const ShyzmtcktInfoResult_1 = require("./ShyzmtcktInfoResult");
/**
 * 座席予約済チケット検索out
 * @class
 */
class ShyzmtcktInfoListResult {
    constructor() {
        this.kiinCd = ''; // 会員コード
        this.shyzmtcktInfo = null; // 作品詳細情報(itemArray)
    }
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {ShyzmtcktInfoListResult} 座席予約済チケット検索out
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new ShyzmtcktInfoListResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            if (normalizedName === 'shyzmtcktInfo') {
                const infos = [];
                if (property !== null && property.hasOwnProperty('ShyzmtcktInfo')) {
                    if (Array.isArray(property.ShyzmtcktInfo)) {
                        for (const info of property.ShyzmtcktInfo) {
                            infos.push(ShyzmtcktInfoResult_1.default.parse(info));
                        }
                    }
                    else {
                        infos.push(ShyzmtcktInfoResult_1.default.parse(property.ShyzmtcktInfo));
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
exports.default = ShyzmtcktInfoListResult;
