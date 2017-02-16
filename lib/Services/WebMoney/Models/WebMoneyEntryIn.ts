import BaseIn from '../../../Common/models/BaseIn';

/**
 * WebMoney決済実行inクラス
 * @class
 * @extends {BaseIn}
 */
export class WebMoneyEntryIn extends BaseIn {
    public kssiknrNo: string; // 決済管理番号
    public knshknknrNo: string; // 鑑賞券管理番号
    public skhnNm: string; // 作品コード
    public dvcTyp: string; // 購入デバイス区分
    public knshknInfo: {
        KnshInfoIn: KnshInfoIn[];
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

        for (const info of this.knshknInfo.KnshInfoIn) {
            const radix = 10;
            message += `
        <q1:KnshInfoIn>
            <q1:KNSHKBN_NM>${info.KNSHKBN_NM}</q1:KNSHKBN_NM>
            <q1:KNSHKNHMBI_UNIP>${Math.floor(parseInt(info.KNSHKNHMBI_UNIP, radix)).toString()}</q1:KNSHKNHMBI_UNIP>
            <q1:KNSHKNKNRMISI_NO>${info.KNSHKNKNRMISI_NO}</q1:KNSHKNKNRMISI_NO>
            <q1:KNYMI_NUM>${info.KNYMI_NUM}</q1:KNYMI_NUM>
        </q1:KnshInfoIn>
`;
        }

        // tslint:disable-next-line:no-multiline-string
        message += `
    </tns:knshknInfo>
</tns:WebMoneyEntry>
`;

        return message;
    }
}

/**
 * KnshInfoIn
 * @interface
 */
export interface KnshInfoIn {
    KNSHKNKNRMISI_NO: string;
    KNSHKBN_NM: string;
    KNSHKNHMBI_UNIP: string;
    KNYMI_NUM: string;
}

/**
 * WebMoney決済実行in
 * @interface
 */
export interface IWebMoneyEntryIn {
    /**
     * 決済管理番号
     */
    kssiknrNo: string;
    /**
     * 鑑賞券管理番号
     */
    knshknknrNo: string;
    /**
     * 作品コード
     */
    skhnNm: string;
    /**
     * 購入デバイス区分
     */
    dvcTyp: string;
    /**
     * KnshInfoIn array
     */
    knshknInfo: {
        KnshInfoIn: KnshInfoIn[];
    };
}
