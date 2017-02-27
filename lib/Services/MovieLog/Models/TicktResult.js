"use strict";
const CommonUtil = require("../../../Common/Util/Util");
class TicktResult {
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {TicktResult} 券種情報out
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new TicktResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
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
        });
        return result;
    }
    ;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TicktResult;
