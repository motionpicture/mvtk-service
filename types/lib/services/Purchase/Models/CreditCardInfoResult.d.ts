/**
 * 代行会社カード参照呼出out
 * @class
 */
export default class CreditCardInfoResult {
    cardseq: string;
    crdtcrdNo: string;
    crdykkgn: string;
    mignn: string;
    scrtyCd: string;
    static parse(resultObject: any): CreditCardInfoResult;
    /**
     * カード番号の一部を取得
     *
     * APIから取得した値は末尾3文字以外が伏せられているので、
     * それに合わせて末尾3文字を返す。
     *
     * @return {string}
     */
    getNoSub(): string;
    /**
     * 有効期限（年）を取得
     *
     * @return {string} YY形式
     */
    getYukoKigenYear(): string;
    /**
     * 有効期限（月）を取得
     *
     * @return {string} MM形式
     */
    getYukoKigenMonth(): string;
}
