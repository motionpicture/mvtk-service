"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * ムビチケギフトカード認証out
 * @class
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
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new GiftCardIDAuthResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        });
        return result;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GiftCardIDAuthResult;
