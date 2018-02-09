"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../../../common/util/Util");
/**
 * GetDigitalIncentiveDownloadLinkListResult
 */
class GetDigitalIncentiveDownloadLinkListResult {
    static parse(resultObject) {
        const result = new GetDigitalIncentiveDownloadLinkListResult();
        for (const propertyName in resultObject) {
            const normalizedName = Util_1.Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            if (normalizedName === 'dgtlincntvInfo') {
                const dgtlincntvInfos = [];
                if (property !== null && property.hasOwnProperty('DgtlincntvInfo')) {
                    if (Array.isArray(property.DgtlincntvInfo)) {
                        for (const info of property.DgtlincntvInfo) {
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
}
exports.GetDigitalIncentiveDownloadLinkListResult = GetDigitalIncentiveDownloadLinkListResult;
