import { BaseIn } from '../../../common/models/BaseIn';

/**
 * WebMoneyEntryIn
 */
export class WebMoneyEntryIn extends BaseIn {
    public kssiknrNo: string; // 決済管理番号
    public knshknknrNo: string; // 鑑賞券管理番号
    public skhnNm: string; // 作品コード
    public dvcTyp: string; // 購入デバイス区分
    public knshknInfo: {
        KnshInfoIn: {
            KNSHKNKNRMISI_NO: string;
            KNSHKBN_NM: string;
            KNSHKNHMBI_UNIP: string;
            KNYMI_NUM: string;
        }[];
    };
    public rykngk: string; // 利用金額（=チケット合計金額-併用決済金額-ムビチケポイント）

    public toXml(): any {
        // パラメータの順序が異なるとエラーになるので注意
        // return {
        //     kssiknrNo: this.kssiknrNo,
        //     skhnNm: this.skhnNm,
        //     dvcTyp: this.dvcTyp,
        //     knshknknrNo: this.knshknknrNo,
        //     knshknInfo: {
        //         KnshInfoIn: this.knshknInfo.KnshInfoIn.map((info) => {
        //             return {
        //                 KNSHKBN_NM: info.KNSHKBN_NM,
        //                 KNSHKNHMBI_UNIP: info.KNSHKNHMBI_UNIP,
        //                 KNSHKNKNRMISI_NO: info.KNSHKNKNRMISI_NO,
        //                 KNYMI_NUM: info.KNYMI_NUM,
        //                 targetNSAlias: 'tns',
        //                 // tslint:disable-next-line:no-http-string max-line-length
        //                 targetNamespace: 'http://schemas.datacontract.org/2004/07/MTES.WCFModel.WebMoney.WebMoneySvc.WebMoneyEntry'
        //             };
        //         }),
        //         targetNSAlias: 'q1',
        //         // tslint:disable-next-line:no-http-string max-line-length
        //         targetNamespace: 'http://schemas.datacontract.org/2004/07/MTES.WCFModel.WebMoney.WebMoneySvc.WebMoneyEntry'
        //     },
        //     rykngk: this.rykngk
        // };

                let message = `
        <tns:WebMoneyEntry>
            <tns:kssiknrNo>${this.kssiknrNo}</tns:kssiknrNo>
            <tns:skhnNm>${this.skhnNm}</tns:skhnNm>
            <tns:dvcTyp>${this.dvcTyp}</tns:dvcTyp>
            <tns:knshknknrNo>${this.knshknknrNo}</tns:knshknknrNo>
            <tns:knshknInfo>
        `;

                for (const info of this.knshknInfo.KnshInfoIn) {
                    message += `
                <q1:KnshInfoIn>
                    <q1:KNSHKBN_NM>${info.KNSHKBN_NM}</q1:KNSHKBN_NM>
                    <q1:KNSHKNHMBI_UNIP>${Math.floor(parseInt(info.KNSHKNHMBI_UNIP, 10)).toString()}</q1:KNSHKNHMBI_UNIP>
                    <q1:KNSHKNKNRMISI_NO>${info.KNSHKNKNRMISI_NO}</q1:KNSHKNKNRMISI_NO>
                    <q1:KNYMI_NUM>${info.KNYMI_NUM}</q1:KNYMI_NUM>
                </q1:KnshInfoIn>
        `;
                }

                message += `
            </tns:knshknInfo>
            <tns:rykngk>${this.rykngk}</tns:rykngk>
        </tns:WebMoneyEntry>
        `;

        return { _xml: message };
    }
}
