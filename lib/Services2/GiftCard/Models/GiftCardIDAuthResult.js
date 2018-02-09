"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../../../common/util/Util");
/**
 * GiftCardIDAuthResult
 */
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
        const result = new GiftCardIDAuthResult();
        for (const propertyName in resultObject) {
            const normalizedName = Util_1.Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        }
        return result;
    }
}
exports.GiftCardIDAuthResult = GiftCardIDAuthResult;
