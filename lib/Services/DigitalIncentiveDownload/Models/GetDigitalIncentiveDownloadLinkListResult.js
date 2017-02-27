"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * デジタルインセンティブダウンロード情報検索out
 */
class GetDigitalIncentiveDownloadLinkListResult {
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {GetDigitalIncentiveDownloadLinkListResult} デジタルインセンティブダウンロード情報検索out
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new GetDigitalIncentiveDownloadLinkListResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
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
        });
        return result;
    }
    ;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GetDigitalIncentiveDownloadLinkListResult;
