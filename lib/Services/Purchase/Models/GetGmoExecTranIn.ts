import BaseIn from '../../../Common/models/BaseIn';

export default class GetGmoExecTranIn extends BaseIn {
    public kssiknrNo: string; // 決済管理番号
    public kssihhTyp: string; // 決済方法区分
    public accessId: string; // 取引ID
    public accessPwd: string; // 取引パスワード
    public crdtcrdinputKbn: string; // カード情報入力区分
    public httpAccept: string; // HTTP_ACCEPT
    public httpUserAgent: string; // HTTP_USER_AGENT
    public dvcTyp: string; // デバイス区分

    public crdtcrdNo: string; // クレジットカード番号
    public crdykkgn: string; // カード有効期限
    public scrtyCd: string; // セキュリティーコード
    public kiinCd: string; // 会員コード
    public cardseq: string; // カード登録連番
    public knyshNm: string; // 購入者名
    public shhnTyp: string; // ???

    public toXml(): string {
        // パラメータの順序が異なるとエラーになるので注意
        let message = `
<tns:GetGmoExecTran>
    <tns:kssiknrNo>${this.kssiknrNo}</tns:kssiknrNo>
    <tns:kssihhTyp>${this.kssihhTyp}</tns:kssihhTyp>
    <tns:accessId>${this.accessId}</tns:accessId>
    <tns:accessPwd>${this.accessPwd}</tns:accessPwd>
    <tns:crdtcrdinputKbn>${this.crdtcrdinputKbn}</tns:crdtcrdinputKbn>
    <tns:httpAccept>${this.httpAccept}</tns:httpAccept>
    <tns:httpUserAgent>${this.httpUserAgent}</tns:httpUserAgent>
    <tns:dvcTyp>${this.dvcTyp}</tns:dvcTyp>
`;
        if (this.crdtcrdNo) {
            message +=`
    <tns:crdtcrdNo>${this.crdtcrdNo}</tns:crdtcrdNo>
`;
        }
        if (this.crdykkgn) {
            message +=`
    <tns:crdykkgn>${this.crdykkgn}</tns:crdykkgn>
`;
        }
        if (this.scrtyCd) {
            message +=`
    <tns:scrtyCd>${this.scrtyCd}</tns:scrtyCd>
`;
        }
        if (this.kiinCd) {
            message +=`
    <tns:kiinCd>${this.kiinCd}</tns:kiinCd>
`;
        }
        if (this.cardseq) {
            message +=`
    <tns:cardseq>${this.cardseq}</tns:cardseq>
`;
        }
        if (this.knyshNm) {
            message +=`
    <tns:knyshNm>${this.knyshNm}</tns:knyshNm>
`;
        }

            message +=`
</tns:GetGmoExecTran>
`;

        return message;
    }
}
