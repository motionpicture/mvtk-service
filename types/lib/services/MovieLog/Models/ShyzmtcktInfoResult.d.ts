/**
 * 作品詳細情報out
 * @class
 */
export default class ShyzmtcktInfoResult {
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
    static PARSE(resultObject: any): ShyzmtcktInfoResult;
}
/**
 * 券種情報
 * @interface
 */
export interface KnshInfo {
    /**
     * 券種区分名称
     */
    KNSHKBN_NM: string;
    /**
     * 購入枚数
     */
    KNY_NUM: string;
}
