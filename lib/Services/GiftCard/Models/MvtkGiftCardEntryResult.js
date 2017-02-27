"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * ギフトカード利用out
 * @class
 */
class MvtkGiftCardEntryResult {
    constructor() {
        this.tppnsrvcrspns = ''; // 凸版サービス返却値
        this.mvtkgftcrdId = ''; // ムビチケギフトカードID
        this.mvtkgftcrdpinCd = ''; // ムビチケギフトカード認証番号
        this.gftcrdkssiknrNo = ''; // ギフト決済管理番号
        this.ryukngk = ''; // 利用金額
        this.ryumezndk = ''; // 利用前残高
        this.zndk = ''; // 残高
        this.synnNo = ''; // 承認番号
        this.syrykyDt = ''; // 処理要求日時
        this.giftcardstatus = ''; // ギフトカードステータス
    }
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {MvtkGiftCardEntryResult} ギフトカード利用out
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new MvtkGiftCardEntryResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        });
        return result;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MvtkGiftCardEntryResult;
