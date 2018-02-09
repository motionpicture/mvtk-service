"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../../../common/util/Util");
/**
 * CreditCardInfoResult
 */
class CreditCardInfoResult {
    static parse(resultObject) {
        const result = new CreditCardInfoResult();
        for (const propertyName in resultObject) {
            const normalizedName = Util_1.Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        }
        return result;
    }
    /**
     * カード番号の一部を取得
     * @desc APIから取得した値は末尾3文字以外が伏せられているので、それに合わせて末尾3文字を返す。
     */
    getNoSub() {
        return this.crdtcrdNo.substr(this.crdtcrdNo.length - 3);
    }
    /**
     * 有効期限（年）を取得
     */
    getYukoKigenYear() {
        return this.crdykkgn.substr(0, 2);
    }
    /**
     * 有効期限（月）を取得
     */
    getYukoKigenMonth() {
        return this.crdykkgn.substr(2);
    }
}
exports.CreditCardInfoResult = CreditCardInfoResult;
