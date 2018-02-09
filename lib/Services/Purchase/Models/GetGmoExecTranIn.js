"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseIn_1 = require("../../../common/models/BaseIn");
/**
 * GetGmoExecTranIn
 */
class GetGmoExecTranIn extends BaseIn_1.BaseIn {
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
        if (this.crdtcrdNo !== undefined) {
            message += `
    <tns:crdtcrdNo>${this.crdtcrdNo}</tns:crdtcrdNo>
`;
        }
        if (this.crdykkgn !== undefined) {
            message += `
    <tns:crdykkgn>${this.crdykkgn}</tns:crdykkgn>
`;
        }
        if (this.scrtyCd !== undefined) {
            message += `
    <tns:scrtyCd>${this.scrtyCd}</tns:scrtyCd>
`;
        }
        if (this.kiinCd !== undefined) {
            message += `
    <tns:kiinCd>${this.kiinCd}</tns:kiinCd>
`;
        }
        if (this.cardseq !== undefined) {
            message += `
    <tns:cardseq>${this.cardseq}</tns:cardseq>
`;
        }
        if (this.knyshNm !== undefined) {
            message += `
    <tns:knyshNm>${this.knyshNm}</tns:knyshNm>
`;
        }
        message += `
</tns:GetGmoExecTran>
`;
        return message;
    }
}
exports.GetGmoExecTranIn = GetGmoExecTranIn;
