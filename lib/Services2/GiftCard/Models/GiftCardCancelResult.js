"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * ムビチケギフトカード取消out
 * @class
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
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new GiftCardCancelResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        });
        return result;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GiftCardCancelResult;
