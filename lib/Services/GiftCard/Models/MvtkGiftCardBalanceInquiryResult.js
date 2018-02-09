"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../../../common/util/Util");
/**
 * MvtkGiftCardBalanceInquiryResult
 */
class MvtkGiftCardBalanceInquiryResult {
    static parse(resultObject) {
        const result = new MvtkGiftCardBalanceInquiryResult();
        for (const propertyName in resultObject) {
            const normalizedName = Util_1.Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            if (normalizedName === 'rymisiInfo') {
                const rymisiInfos = [];
                if (property !== null && property.hasOwnProperty('RymisiInfo')) {
                    if (Array.isArray(property.RymisiInfo)) {
                        for (const info of property.RymisiInfo) {
                            rymisiInfos.push(info);
                        }
                    }
                    else {
                        rymisiInfos.push(property.RymisiInfo);
                    }
                }
                result[normalizedName] = rymisiInfos;
            }
            else {
                result[normalizedName] = property;
            }
        }
        return result;
    }
}
exports.MvtkGiftCardBalanceInquiryResult = MvtkGiftCardBalanceInquiryResult;
