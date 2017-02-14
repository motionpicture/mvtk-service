import BaseIn from '../../../common/models/BaseIn';
export default class WebMoneyEntryIn extends BaseIn {
    kssiknrNo: string;
    knshknknrNo: string;
    skhnNm: string;
    dvcTyp: string;
    knshknInfo: {
        KnshInfoIn: Array<{
            KNSHKNKNRMISI_NO: string;
            KNSHKBN_NM: string;
            KNSHKNHMBI_UNIP: string;
            KNYMI_NUM: string;
        }>;
    };
    toXml(): string;
}
