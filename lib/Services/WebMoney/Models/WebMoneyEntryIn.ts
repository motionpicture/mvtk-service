import BaseIn from '../../../Common/models/BaseIn';

export default class WebMoneyEntryIn extends BaseIn {
    public kssiknrNo: string; // 決済管理番号
    public knshknknrNo: string; // 鑑賞券管理番号
    public skhnNm: string; // 作品コード
    public dvcTyp: string; // 購入デバイス区分
    public knshknInfo: {
        KnshInfoIn: Array<{
            KNSHKNKNRMISI_NO: string;
            KNSHKBN_NM: string;
            KNSHKNHMBI_UNIP: string;
            KNYMI_NUM: string;
        }>;
    };

    public toXml(): string {
        let message = `
<tns:WebMoneyEntry>
    <tns:kssiknrNo>${this.kssiknrNo}</tns:kssiknrNo>
    <tns:skhnNm>${this.skhnNm}</tns:skhnNm>
    <tns:dvcTyp>${this.dvcTyp}</tns:dvcTyp>
    <tns:knshknknrNo>${this.knshknknrNo}</tns:knshknknrNo>
    <tns:knshknInfo>
`;

        for (let info of this.knshknInfo.KnshInfoIn) {
            message += `
        <q1:KnshInfoIn>
            <q1:KNSHKBN_NM>${info.KNSHKBN_NM}</q1:KNSHKBN_NM>
            <q1:KNSHKNHMBI_UNIP>${Math.floor(PARSEInt(info.KNSHKNHMBI_UNIP)).toString()}</q1:KNSHKNHMBI_UNIP>
            <q1:KNSHKNKNRMISI_NO>${info.KNSHKNKNRMISI_NO}</q1:KNSHKNKNRMISI_NO>
            <q1:KNYMI_NUM>${info.KNYMI_NUM}</q1:KNYMI_NUM>
        </q1:KnshInfoIn>
`;
        }

        message += `
    </tns:knshknInfo>
</tns:WebMoneyEntry>
`;

        return message;
    }
}
