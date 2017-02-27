"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * ムビチケギフトカード残高確認out
 * @class
 */
class MvtkGiftCardBalanceInquiryResult {
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {MvtkGiftCardBalanceInquiryResult} ムビチケギフトカード残高確認out
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new MvtkGiftCardBalanceInquiryResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
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
        });
        return result;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MvtkGiftCardBalanceInquiryResult;
