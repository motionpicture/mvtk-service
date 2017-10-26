"use strict";
const Util_1 = require("../../../common/util/Util");
/**
 * 特典コード確保out
 * @class
 */
class PreserveCodeResult {
    constructor() {
        /**
         * 特典コード確保番号 (特典コード確保時に採番される一意な番号)
         */
        this.tktncdkkhNo = [];
        /**
         * 特典在庫状況メッセージ本文 (在庫僅少、在庫切れ時表示メッセージ（HTMLタグを含む）)
         */
        this.tktnzikjkymsgTxt = [];
    }
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new PreserveCodeResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = Util_1.default.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            if (normalizedName === 'tktncdkkhNo') {
                const tktncdkkhNoList = [];
                if (property !== null && property.hasOwnProperty('TktncdkkhNo')) {
                    if (Array.isArray(property.TktncdkkhNo)) {
                        for (const tktncdkkhNo of property.TktncdkkhNo) {
                            tktncdkkhNoList.push(tktncdkkhNo);
                        }
                    }
                    else {
                        tktncdkkhNoList.push(property.TktncdkkhNo);
                    }
                }
                result[normalizedName] = tktncdkkhNoList;
            }
            else if (normalizedName === 'tktnzikjkymsgTxt') {
                const tktnzikjkymsgTxts = [];
                if (property !== null && property.hasOwnProperty('TktnzikjkymsgTxt')) {
                    if (Array.isArray(property.TktnzikjkymsgTxt)) {
                        for (const tktnzikjkymsgTxt of property.TktnzikjkymsgTxt) {
                            tktnzikjkymsgTxts.push(tktnzikjkymsgTxt);
                        }
                    }
                    else {
                        tktnzikjkymsgTxts.push(property.TktnzikjkymsgTxt);
                    }
                }
                result[normalizedName] = tktnzikjkymsgTxts;
            }
            else {
                result[normalizedName] = property;
            }
        });
        return result;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PreserveCodeResult;
