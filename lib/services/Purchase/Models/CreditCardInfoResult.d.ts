/**
 * CreditCardInfoResult
 */
export declare class CreditCardInfoResult {
    cardseq: string;
    crdtcrdNo: string;
    crdykkgn: string;
    mignn: string;
    scrtyCd: string;
    static parse(resultObject: any): CreditCardInfoResult;
    /**
     * カード番号の一部を取得
     * @desc APIから取得した値は末尾3文字以外が伏せられているので、それに合わせて末尾3文字を返す。
     */
    getNoSub(): string;
    /**
     * 有効期限（年）を取得
     */
    getYukoKigenYear(): string;
    /**
     * 有効期限（月）を取得
     */
    getYukoKigenMonth(): string;
}
