/**
 * 代行会社決済実行呼出out
 * @class
 */
export default class GetGmoExecTranResult {
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
    static PARSE(resultObject: any): GetGmoExecTranResult;
}
