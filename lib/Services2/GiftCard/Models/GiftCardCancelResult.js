"use strict";
const Util_1 = require("../../../common/util/Util");
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
        let result = new GiftCardCancelResult();
        for (let propertyName in resultObject) {
            let normalizedName = Util_1.default.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];
            result[normalizedName] = property;
        }
        return result;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GiftCardCancelResult;
