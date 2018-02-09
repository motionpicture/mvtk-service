"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../../../common/util/Util");
/**
 * GiftCardCancelResult
 */
class GiftCardCancelResult {
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
         * 利用前残高
         */
        this.ryumezndk = '';
        /**
         * 残高
         */
        this.zndk = '';
        /**
         * 承認番号
         */
        this.synnNo = '';
        /**
         * 処理要求日時
         */
        this.syrykyDt = '';
        /**
         * ギフトカードステータス
         */
        this.giftcardstatus = '';
    }
    static parse(resultObject) {
        const result = new GiftCardCancelResult();
        for (const propertyName in resultObject) {
            const normalizedName = Util_1.Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        }
        return result;
    }
}
exports.GiftCardCancelResult = GiftCardCancelResult;
