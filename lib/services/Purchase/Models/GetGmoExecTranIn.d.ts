import BaseIn from '../../../common/models/BaseIn';
export default class GetGmoExecTranIn extends BaseIn {
    kssiknrNo: string;
    kssihhTyp: string;
    accessId: string;
    accessPwd: string;
    crdtcrdinputKbn: string;
    httpAccept: string;
    httpUserAgent: string;
    dvcTyp: string;
    crdtcrdNo: string;
    crdykkgn: string;
    scrtyCd: string;
    kiinCd: string;
    cardseq: string;
    knyshNm: string;
    shhnTyp: string;
    toXml(): string;
}
