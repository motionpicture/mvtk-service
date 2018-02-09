export interface KnshInfo {
    KNSHKBN_NM: string;
    KNY_NUM: string;
}
/**
 * MshyticktInfo
 */
export declare class MshyticktInfo {
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
    static parse(resultObject: any): MshyticktInfo;
}
/**
 * GetUnusedTicketListResult
 */
export declare class GetUnusedTicketListResult {
    kiinCd: string;
    mshyticktInfo: MshyticktInfo[];
    static parse(resultObject: any): GetUnusedTicketListResult;
}
