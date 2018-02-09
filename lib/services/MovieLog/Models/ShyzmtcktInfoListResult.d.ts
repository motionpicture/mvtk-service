export interface KnshInfo {
    KNSHKBN_NM: string;
    KNY_NUM: string;
}
/**
 * ShyzmtcktInfo
 */
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
    knshInfo: KnshInfo[];
    dgtlincntvdwnlodgmnUrl: string;
    knytcktSttsKbn: string;
    static parse(resultObject: any): ShyzmtcktInfo;
}
/**
 * ShyzmtcktInfoListResult
 */
export declare class ShyzmtcktInfoListResult {
    kiinCd: string;
    shyzmtcktInfo: ShyzmtcktInfo[];
    static parse(resultObject: any): ShyzmtcktInfoListResult;
}
