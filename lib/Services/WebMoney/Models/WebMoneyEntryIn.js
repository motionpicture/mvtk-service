"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseIn_1 = require("../../../common/models/BaseIn");
class WebMoneyEntryIn extends BaseIn_1.default {
    toXml() {
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
            <q1:KNSHKNHMBI_UNIP>${Math.floor(parseInt(info.KNSHKNHMBI_UNIP)).toString()}</q1:KNSHKNHMBI_UNIP>
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
exports.default = WebMoneyEntryIn;
