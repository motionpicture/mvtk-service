"use strict";
const Util_1 = require("../../../common/util/Util");
class GiftCardIDAuthResult {
    constructor() {
        /**
         * 凸版サービス返却値
         */
        this.tppnsrvcrspns = '';
        /**
         * ムビチケギフトカードID
         */
        this.mvtkgftcrdId = '';
        /**
         * 残高
         */
        this.zndk = '';
        /**
         * 利用金額
         */
        this.ryukngk = '';
        /**
         * ギフトカードステータス
         */
        this.giftcardstatus = '';
        /**
         * 他決済利用金額
         */
        this.tkssiryukngk = '';
    }
    static parse(resultObject) {
        let result = new GiftCardIDAuthResult();
        for (let propertyName in resultObject) {
            let normalizedName = Util_1.default.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];
            result[normalizedName] = property;
        }
        return result;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GiftCardIDAuthResult;
