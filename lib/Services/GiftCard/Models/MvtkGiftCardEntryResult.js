"use strict";
const Util_1 = require("../../../common/util/Util");
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
    static parse(resultObject) {
        let result = new MvtkGiftCardEntryResult();
        for (let propertyName in resultObject) {
            let normalizedName = Util_1.default.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];
            result[normalizedName] = property;
        }
        return result;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MvtkGiftCardEntryResult;
