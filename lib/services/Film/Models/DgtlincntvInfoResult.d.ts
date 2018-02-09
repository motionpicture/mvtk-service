/**
 * 特典取得out
 */
export declare class DgtlincntvInfoResult {
    dvcTyp: string;
    dgtlincntvCd: string;
    dgtlincntvTtl: string;
    dgtlincntvstsmiTxt: string;
    smplqzUrl: string;
    dgtlincntvknykishYmd: string;
    dgtlincntvknyshryYmd: string;
    dgtlincntvdwnlodykTm: string;
    dgtlincntvdwnlodjgnkiNum: string;
    skhndgtlincntvRmk: string;
    /**
     * データ整形
     */
    static parse(resultObject: any): DgtlincntvInfoResult;
}
