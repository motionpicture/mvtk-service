"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../../../common/util/Util");
/**
 * 特典コード確保out
 * @class
 */
class PreserveCodeResult {
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new PreserveCodeResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = Util_1.default.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            if (normalizedName === 'tktncdkkhInfo') {
                const tktncdkkhInfoList = [];
                if (property !== null && property.hasOwnProperty('TktncdkkhInfo')) {
                    if (Array.isArray(property.TktncdkkhInfo)) {
                        for (const tktncdkkhInfo of property.TktncdkkhInfo) {
                            tktncdkkhInfoList.push(tktncdkkhInfo);
                        }
                    }
                    else {
                        tktncdkkhInfoList.push(property.TktncdkkhInfo);
                    }
                }
                result[normalizedName] = tktncdkkhInfoList;
            }
            else if (normalizedName === 'tktnzikjkymsgTxt') {
                const tktnzikjkymsgTxts = [];
                if (property !== null && property.hasOwnProperty('string')) {
                    if (Array.isArray(property.string)) {
                        for (const tktnzikjkymsgTxt of property.string) {
                            tktnzikjkymsgTxts.push(tktnzikjkymsgTxt);
                        }
                    }
                    else {
                        tktnzikjkymsgTxts.push(property.string);
                    }
                }
                result[normalizedName] = tktnzikjkymsgTxts;
            }
            else {
                result[normalizedName] = property;
            }
        });
        if (result.tktncdkkhInfo === undefined) {
            result.tktncdkkhInfo = [];
        }
        return result;
    }
}
exports.default = PreserveCodeResult;
