"use strict";
const Util_1 = require("../../../common/util/Util");
class CreditCardInfoResult {
    static parse(resultObject) {
        let result = new CreditCardInfoResult();
        for (let propertyName in resultObject) {
            let normalizedName = Util_1.default.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];
            result[normalizedName] = property;
        }
        return result;
    }
    /**
     * カード番号の一部を取得
     *
     * APIから取得した値は末尾3文字以外が伏せられているので、
     * それに合わせて末尾3文字を返す。
     *
     * @return {string}
     */
    getNoSub() {
        return this.crdtcrdNo.substr(this.crdtcrdNo.length - 3);
    }
    /**
     * 有効期限（年）を取得
     *
     * @return {string} YY形式
     */
    getYukoKigenYear() {
        return this.crdykkgn.substr(0, 2);
    }
    /**
     * 有効期限（月）を取得
     *
     * @return {string} MM形式
     */
    getYukoKigenMonth() {
        return this.crdykkgn.substr(2);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CreditCardInfoResult;
