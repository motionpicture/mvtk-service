"use strict";
const CommonUtil = require("../../../Common/Util/Util");
const TicktResult_1 = require("./TicktResult");
/**
 * 未使用チケット検索out
 * @class
 */
class GetUnusedTicketListResult {
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {GetUnusedTicketListResult} 未使用チケット検索out
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new GetUnusedTicketListResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            if (normalizedName === 'mshyticktInfo') {
                const infos = [];
                if (property !== null && property.hasOwnProperty('MshyticktInfo')) {
                    if (Array.isArray(property.MshyticktInfo)) {
                        for (const info of property.MshyticktInfo) {
                            infos.push(TicktResult_1.default.parse(info));
                        }
                    }
                    else {
                        infos.push(TicktResult_1.default.parse(property.MshyticktInfo));
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
exports.default = GetUnusedTicketListResult;
