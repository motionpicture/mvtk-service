/**
 * GetGmoExecTranResult
 */
export declare class GetGmoExecTranResult {
    acsKbn: string;
    acsurl: string;
    pareq: string;
    md: string;
    forwardCd: string;
    tranDt: string;
    approveNo: string;
    tranId: string;
    auaccssId: string;
    autkn: string;
    austrtUrl: string;
    docomoaccssId: string;
    docomotkn: string;
    docomostrtUrl: string;
    kssierrrshriTyp: string;
    kssierrrmssgTxt: string;
    static parse(resultObject: any): GetGmoExecTranResult;
}