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
    static parse(resultObject: any): DgtlincntvInfoResult;
}
