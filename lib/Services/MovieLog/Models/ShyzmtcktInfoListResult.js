"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../../../common/util/Util");
/**
 * ShyzmtcktInfo
 */
class ShyzmtcktInfo {
    static parse(resultObject) {
        const result = new ShyzmtcktInfo();
        for (const propertyName in resultObject) {
            const normalizedName = Util_1.Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            if (normalizedName === 'knshInfo') {
                const infos = [];
                if (property !== null && property.hasOwnProperty('KnshInfo')) {
                    if (Array.isArray(property.KnshInfo)) {
                        for (const info of property.KnshInfo) {
                            infos.push(info);
                        }
                    }
                    else {
                        infos.push(property.KnshInfo);
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
exports.ShyzmtcktInfo = ShyzmtcktInfo;
/**
 * ShyzmtcktInfoListResult
 */
class ShyzmtcktInfoListResult {
    constructor() {
        this.kiinCd = ''; // 会員コード
        this.shyzmtcktInfo = []; // 作品詳細情報(itemArray)
    }
    static parse(resultObject) {
        const result = new ShyzmtcktInfoListResult();
        for (const propertyName in resultObject) {
            const normalizedName = Util_1.Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            if (normalizedName === 'shyzmtcktInfo') {
                const infos = [];
                if (property !== null && property.hasOwnProperty('ShyzmtcktInfo')) {
                    if (Array.isArray(property.ShyzmtcktInfo)) {
                        for (const info of property.ShyzmtcktInfo) {
                            infos.push(ShyzmtcktInfo.parse(info));
                        }
                    }
                    else {
                        infos.push(ShyzmtcktInfo.parse(property.ShyzmtcktInfo));
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
exports.ShyzmtcktInfoListResult = ShyzmtcktInfoListResult;
