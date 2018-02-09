"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../../../common/util/Util");
/**
 * MshyticktInfo
 */
class MshyticktInfo {
    static parse(resultObject) {
        const result = new MshyticktInfo();
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
exports.MshyticktInfo = MshyticktInfo;
/**
 * GetUnusedTicketListResult
 */
class GetUnusedTicketListResult {
    static parse(resultObject) {
        const result = new GetUnusedTicketListResult();
        for (const propertyName in resultObject) {
            const normalizedName = Util_1.Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            if (normalizedName === 'mshyticktInfo') {
                const infos = [];
                if (property !== null && property.hasOwnProperty('MshyticktInfo')) {
                    if (Array.isArray(property.MshyticktInfo)) {
                        for (const info of property.MshyticktInfo) {
                            infos.push(MshyticktInfo.parse(info));
                        }
                    }
                    else {
                        infos.push(MshyticktInfo.parse(property.MshyticktInfo));
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
exports.GetUnusedTicketListResult = GetUnusedTicketListResult;
