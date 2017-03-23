/**
 * 券種情報out
 * @interface
 */
export interface KnshInfo {
    KNSHKBN_NM: string;
    KNY_NUM: string;
}
export default class TicktResult {
    knyknrNo: string;
    skhnCd: string;
    skhnNm: string;
    pstrgzUrl: string;
    znkkkkikishYmd: string;
    znkkkkijkDspt: string;
    knyYmd: string;
    knymiNumSum: string;
    knshInfo: KnshInfo[];
    dgtlincntvdwnlodgmnUrl: string;
    zskyykkFlg: string;
    shknhikygishCd: string;
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {TicktResult} 券種情報out
     */
    static parse(resultObject: any): TicktResult;
}
