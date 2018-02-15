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
        if (this.crdtcrdNo !== undefined && this.crdtcrdNo !== null && this.crdtcrdNo !== '') {
            message += `
    <tns:crdtcrdNo>${this.crdtcrdNo}</tns:crdtcrdNo>
`;
        }
        if (this.crdykkgn !== undefined && this.crdykkgn !== null && this.crdykkgn !== '') {
            message += `
    <tns:crdykkgn>${this.crdykkgn}</tns:crdykkgn>
`;
        }
        if (this.scrtyCd !== undefined && this.scrtyCd !== null && this.scrtyCd !== '') {
            message += `
    <tns:scrtyCd>${this.scrtyCd}</tns:scrtyCd>
`;
        }
        if (this.kiinCd !== undefined && this.kiinCd !== null && this.kiinCd !== '') {
            message += `
    <tns:kiinCd>${this.kiinCd}</tns:kiinCd>
`;
        }
        if (this.cardseq !== undefined && this.cardseq !== null && this.cardseq !== '') {
            message += `
    <tns:cardseq>${this.cardseq}</tns:cardseq>
`;
        }
        if (this.knyshNm !== undefined && this.knyshNm !== null && this.knyshNm !== '') {
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
