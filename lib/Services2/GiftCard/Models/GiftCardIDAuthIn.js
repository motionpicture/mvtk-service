"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseIn_1 = require("../../../common/models/BaseIn");
/**
 * GiftCardIDAuthIn
 */
class GiftCardIDAuthIn extends BaseIn_1.BaseIn {
    toXml() {
        // パラメータの順序が異なるとエラーになるので注意
        let message = '<tns:GiftCardIDAuth>';
        message += '<tns:IN_PARAMETER>';
        message += '<q1:MVTKGFTCRD_INFO_IN>';
        for (const info of this.MVTKGFTCRD_INFO_IN.MvtkGftcrdInfo) {
            if (this.LOCK_FLG === '1') {
                message += `
            <q1:MvtkGftcrdInfo>
                <q1:MVTKGFTCRD_ID>${info.MVTKGFTCRD_ID}</q1:MVTKGFTCRD_ID>
                <q1:MVTKGFTCRDPIN_CD>${info.MVTKGFTCRDPIN_CD}</q1:MVTKGFTCRDPIN_CD>
                <q1:GFTCRDKSSIKNR_NO>${info.GFTCRDKSSIKNR_NO}</q1:GFTCRDKSSIKNR_NO>
            </q1:MvtkGftcrdInfo>
`;
            }
            else {
                message += `
            <q1:MvtkGftcrdInfo>
                <q1:MVTKGFTCRD_ID>${info.MVTKGFTCRD_ID}</q1:MVTKGFTCRD_ID>
                <q1:MVTKGFTCRDPIN_CD>${info.MVTKGFTCRDPIN_CD}</q1:MVTKGFTCRDPIN_CD>
            </q1:MvtkGftcrdInfo>
`;
            }
        }
        message += '</q1:MVTKGFTCRD_INFO_IN>';
        if (this.KSSIKNR_NO !== undefined && this.KSSIKNR_NO !== null && this.KSSIKNR_NO !== '') {
            message += `
        <q1:KSSIKNR_NO>${this.KSSIKNR_NO}</q1:KSSIKNR_NO>
`;
        }
        message += `
        <q1:RYUKNGK>${this.RYUKNGK}</q1:RYUKNGK>
        <q1:DVC_TYP>${this.DVC_TYP}</q1:DVC_TYP>
        <q1:LOCK_FLG>${this.LOCK_FLG}</q1:LOCK_FLG>
        <q1:HIYKSSI_FLG>${this.HIYKSSI_FLG}</q1:HIYKSSI_FLG>
`;
        if (this.HIYKSSI_FLG === '1') {
            message += `
        <q1:HIYKSSI_TYP>${this.HIYKSSI_TYP}</q1:HIYKSSI_TYP>
`;
        }
        if (this.KIIN_FLG === '1') {
            message += `
        <q1:KNYSH_CD>${this.KNYSH_CD}</q1:KNYSH_CD>
`;
        }
        message += `
        <q1:KIIN_FLG>${this.KIIN_FLG}</q1:KIIN_FLG>
        <q1:SKHN_CD>${this.SKHN_CD}</q1:SKHN_CD>
    </tns:IN_PARAMETER>
</tns:GiftCardIDAuth>
`;
        return message;
    }
}
exports.GiftCardIDAuthIn = GiftCardIDAuthIn;
