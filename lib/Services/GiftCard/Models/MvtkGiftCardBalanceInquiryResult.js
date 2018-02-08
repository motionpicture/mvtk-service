"use strict";
const Util_1 = require("../../../common/util/Util");
class MvtkGiftCardBalanceInquiryResult {
    static parse(resultObject) {
        let result = new MvtkGiftCardBalanceInquiryResult();
        for (let propertyName in resultObject) {
            let normalizedName = Util_1.default.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];
            if (normalizedName === 'rymisiInfo') {
                let rymisiInfos = [];
                if (property !== null && property.hasOwnProperty('RymisiInfo')) {
                    if (Array.isArray(property.RymisiInfo)) {
                        for (let info of property.RymisiInfo) {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MvtkGiftCardBalanceInquiryResult;
