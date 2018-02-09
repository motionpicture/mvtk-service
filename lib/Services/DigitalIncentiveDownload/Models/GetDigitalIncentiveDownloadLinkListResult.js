"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../../../common/util/Util");
class GetDigitalIncentiveDownloadLinkListResult {
    static parse(resultObject) {
        let result = new GetDigitalIncentiveDownloadLinkListResult();
        for (let propertyName in resultObject) {
            let normalizedName = Util_1.default.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];
            if (normalizedName === 'dgtlincntvInfo') {
                let dgtlincntvInfos = [];
                if (property !== null && property.hasOwnProperty('DgtlincntvInfo')) {
                    if (Array.isArray(property.DgtlincntvInfo)) {
                        for (let info of property.DgtlincntvInfo) {
                            dgtlincntvInfos.push(info);
                        }
                    }
                    else {
                        dgtlincntvInfos.push(property.DgtlincntvInfo);
                    }
                }
                result[normalizedName] = dgtlincntvInfos;
            }
            else {
                result[normalizedName] = property;
            }
        }
        return result;
    }
    ;
}
exports.default = GetDigitalIncentiveDownloadLinkListResult;
