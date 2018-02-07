export interface KnshInfo {
    KNSHKBN_NM: string;
    KNY_NUM: string;
}
export declare class ShyzmtcktInfo {
    mvilgNo: string;
    knyDt: string;
    knyknrNo: string;
    skhnCd: string;
    skhnNm: string;
    pstrgzUrl: string;
    znkkkkikishYmd: string;
    znkkkkijkDspt: string;
    knshkmmisumNum: string;
    knshInfo: Array<KnshInfo>;
    dgtlincntvdwnlodgmnUrl: string;
    knytcktSttsKbn: string;
    static parse(resultObject: any): ShyzmtcktInfo;
}
export default class ShyzmtcktInfoListResult {
    kiinCd: string;
    shyzmtcktInfo: Array<ShyzmtcktInfo>;
    static parse(resultObject: any): ShyzmtcktInfoListResult;
}
