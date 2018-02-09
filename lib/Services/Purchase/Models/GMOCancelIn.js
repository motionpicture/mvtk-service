"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseIn_1 = require("../../../common/models/BaseIn");
/**
 * GMOCancelIn
 */
class GMOCancelIn extends BaseIn_1.BaseIn {
    toXml() {
        return `
<tns:GMOCancel>
    <tns:accessId>${this.accessId}</tns:accessId>
    <tns:accessPwd>${this.accessPwd}</tns:accessPwd>
    <tns:kssihhTyp>${this.kssihhTyp}</tns:kssihhTyp>
    <tns:hiykssihhTyp>${this.hiykssihhTyp}</tns:hiykssihhTyp>
    <tns:kssiknrNo>${this.kssiknrNo}</tns:kssiknrNo>
    <tns:grykngk>${this.grykngk}</tns:grykngk>
    <tns:tranDt>${this.tranDt}</tns:tranDt>
</tns:GMOCancel>
`;
    }
}
exports.GMOCancelIn = GMOCancelIn;
