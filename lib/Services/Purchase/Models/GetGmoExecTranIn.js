"use strict";
const BaseIn_1 = require("../../../Common/models/BaseIn");
/**
 * 代行会社決済実行呼出inクラス
 * @class
 * @extends {BaseIn}
 */
class GetGmoExecTranIn extends BaseIn_1.default {
    toXml() {
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
            message += `
    <tns:crdtcrdNo>${this.crdtcrdNo}</tns:crdtcrdNo>
`;
        }
        if (this.crdykkgn) {
            message += `
    <tns:crdykkgn>${this.crdykkgn}</tns:crdykkgn>
`;
        }
        if (this.scrtyCd) {
            message += `
    <tns:scrtyCd>${this.scrtyCd}</tns:scrtyCd>
`;
        }
        if (this.kiinCd) {
            message += `
    <tns:kiinCd>${this.kiinCd}</tns:kiinCd>
`;
        }
        if (this.cardseq) {
            message += `
    <tns:cardseq>${this.cardseq}</tns:cardseq>
`;
        }
        if (this.knyshNm) {
            message += `
    <tns:knyshNm>${this.knyshNm}</tns:knyshNm>
`;
        }
        message += '</tns:GetGmoExecTran>';
        return message;
    }
}
exports.GetGmoExecTranIn = GetGmoExecTranIn;
