"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../../../common/util/Util");
class ShyzmtcktInfo {
    static parse(resultObject) {
        let result = new ShyzmtcktInfo();
        for (let propertyName in resultObject) {
            let normalizedName = Util_1.default.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];
            if (normalizedName === 'knshInfo') {
                let infos = [];
                if (property !== null && property.hasOwnProperty('KnshInfo')) {
                    if (Array.isArray(property.KnshInfo)) {
                        for (let info of property.KnshInfo) {
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
    ;
}
exports.ShyzmtcktInfo = ShyzmtcktInfo;
class ShyzmtcktInfoListResult {
    constructor() {
        this.kiinCd = ''; // 会員コード
        this.shyzmtcktInfo = null; // 作品詳細情報(itemArray)
    }
    static parse(resultObject) {
        let result = new ShyzmtcktInfoListResult();
        for (let propertyName in resultObject) {
            let normalizedName = Util_1.default.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];
            if (normalizedName === 'shyzmtcktInfo') {
                let infos = [];
                if (property !== null && property.hasOwnProperty('ShyzmtcktInfo')) {
                    if (Array.isArray(property.ShyzmtcktInfo)) {
                        for (let info of property.ShyzmtcktInfo) {
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
    ;
}
exports.default = ShyzmtcktInfoListResult;
