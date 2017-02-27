"use strict";
const BaseIn_1 = require("../../../Common/models/BaseIn");
/**
 * 代行会社取引登録呼出inクラス
 * @class
 * @extends {BaseIn}
 */
class GetGmoEntryTranIn extends BaseIn_1.default {
    toXml() {
        // パラメータの順序が異なるとエラーになるので注意
        let message = `
<tns:GetGmoEntryTran>
    <tns:IN_PARAMETER>
        <q3:KSSIKNR_NO>${this.KSSIKNR_NO}</q3:KSSIKNR_NO>
        <q3:KSSIHH_TYP>${this.KSSIHH_TYP}</q3:KSSIHH_TYP>
        <q3:GRYKNGK>${this.GRYKNGK}</q3:GRYKNGK>
        <q3:KNYSH_CD>${this.KNYSH_CD}</q3:KNYSH_CD>
        <q3:KIIN_FLG>${this.KIIN_FLG}</q3:KIIN_FLG>
`;
        if (this.HIYKSSI_FLG === '1') {
            message += `
        <q3:HIYKSSI_FLG>${this.HIYKSSI_FLG}</q3:HIYKSSI_FLG>
        <q3:HIYKSSI_TYP>${this.HIYKSSI_TYP}</q3:HIYKSSI_TYP>
`;
        }
        message += `
        <q3:SKHN_CD>${this.SKHN_CD}</q3:SKHN_CD>
    </tns:IN_PARAMETER>
</tns:GetGmoEntryTran>
`;
        return message;
    }
}
exports.GetGmoEntryTranIn = GetGmoEntryTranIn;
