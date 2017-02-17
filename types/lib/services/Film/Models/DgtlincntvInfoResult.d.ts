/**
 * 特典取得out
 * @class
 */
export default class DgtlincntvInfoResult {
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
     * @param {any} resultObject
     * @returns {DgtlincntvInfoResult} 特典取得out
     */
    static parse(resultObject: any): DgtlincntvInfoResult;
}
