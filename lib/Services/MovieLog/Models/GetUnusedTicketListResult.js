"use strict";
const Util_1 = require("../../../common/util/Util");
class MshyticktInfo {
    static parse(resultObject) {
        let result = new MshyticktInfo();
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
class GetUnusedTicketListResult {
    static parse(resultObject) {
        let result = new GetUnusedTicketListResult();
        for (let propertyName in resultObject) {
            let normalizedName = Util_1.default.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];
            if (normalizedName === 'mshyticktInfo') {
                let infos = [];
                if (property !== null && property.hasOwnProperty('MshyticktInfo')) {
                    if (Array.isArray(property.MshyticktInfo)) {
                        for (let info of property.MshyticktInfo) {
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
    ;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GetUnusedTicketListResult;
