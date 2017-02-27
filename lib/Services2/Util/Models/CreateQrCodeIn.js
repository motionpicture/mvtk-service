"use strict";
const BaseIn_1 = require("../../../Common/models/BaseIn");
/**
 * 電子券QRコード生成inクラス
 * @class
 * @extends {BaseIn}
 */
class CreateQrCodeIn extends BaseIn_1.default {
    toXml() {
        // パラメータの順序が異なるとエラーになるので注意
        return `
<tns:CreateQrCode>
    <tns:IN_PARAMETER>
        <q1:KNYKNR_NO>${this.KNYKNR_NO}</q1:KNYKNR_NO>
        <q1:PIN_CD>${this.PIN_CD}</q1:PIN_CD>
        <q1:SKHN_CD>${this.SKHN_CD}</q1:SKHN_CD>
    </tns:IN_PARAMETER>
</tns:CreateQrCode>
`;
    }
}
exports.CreateQrCodeIn = CreateQrCodeIn;
