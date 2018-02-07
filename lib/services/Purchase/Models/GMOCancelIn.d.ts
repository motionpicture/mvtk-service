import BaseIn from '../../../common/models/BaseIn';
export default class GMOCancelIn extends BaseIn {
    accessId: string;
    accessPwd: string;
    kssihhTyp: string;
    hiykssihhTyp: string;
    kssiknrNo: string;
    grykngk: string;
    tranDt: string;
    toXml(): string;
}
