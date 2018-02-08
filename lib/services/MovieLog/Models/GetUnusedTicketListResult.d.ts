export interface KnshInfo {
    KNSHKBN_NM: string;
    KNY_NUM: string;
}
export declare class MshyticktInfo {
    knyknrNo: string;
    skhnCd: string;
    skhnNm: string;
    pstrgzUrl: string;
    znkkkkikishYmd: string;
    znkkkkijkDspt: string;
    knyYmd: string;
    knymiNumSum: string;
    knshInfo: Array<KnshInfo>;
    dgtlincntvdwnlodgmnUrl: string;
    zskyykkFlg: string;
    shknhikygishCd: string;
    static parse(resultObject: any): MshyticktInfo;
}
export default class GetUnusedTicketListResult {
    kiinCd: string;
    mshyticktInfo: Array<MshyticktInfo>;
    static parse(resultObject: any): GetUnusedTicketListResult;
}
