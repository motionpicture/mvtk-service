"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * 代行会社カード参照呼出out
 * @class
 */
class CreditCardInfoResult {
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new CreditCardInfoResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        });
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
