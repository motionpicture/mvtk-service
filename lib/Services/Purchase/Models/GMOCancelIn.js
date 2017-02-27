"use strict";
const BaseIn_1 = require("../../../Common/models/BaseIn");
/**
 * 代行会社決済取消呼出inクラス
 * @class
 * @extends {BaseIn}
 */
class GMOCancelIn extends BaseIn_1.default {
    toXml() {
        const message = `
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
        return message;
    }
}
exports.GMOCancelIn = GMOCancelIn;
