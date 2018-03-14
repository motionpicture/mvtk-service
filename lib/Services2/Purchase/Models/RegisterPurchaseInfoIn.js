"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseIn_1 = require("../../../common/models/BaseIn");
/**
 * 購入情報登録inクラス
 * @extends {BaseIn}
 */
class RegisterPurchaseInfoIn extends BaseIn_1.BaseIn {
    // tslint:disable-next-line:max-func-body-length
    toXml() {
        // パラメータの順序が異なるとエラーになるので注意
        let message = `
<tns:RegisterPurchaseInfo>
    <tns:IN_PARAMETER>
        <q5:KSSIKNR_NO>${this.KSSIKNR_NO}</q5:KSSIKNR_NO>
        <q5:ACCESS_ID>${this.ACCESS_ID}</q5:ACCESS_ID>
        <q5:ACCESS_PWD>${this.ACCESS_PWD}</q5:ACCESS_PWD>
        <q5:SKHN_CD>${this.SKHN_CD}</q5:SKHN_CD>
        <q5:KNSHKNKNR_NO>${this.KNSHKNKNR_NO}</q5:KNSHKNKNR_NO>
        <q5:KNSHKN_INFO>
`;
        for (const info of this.KNSHKN_INFO.KnshknInfo) {
            message += `
            <q5:KnshknInfo>
                <q5:KNSHKNKNRMISI_NO>${info.KNSHKNKNRMISI_NO}</q5:KNSHKNKNRMISI_NO>
                <q5:KNSH_TYP>${info.KNSH_TYP}</q5:KNSH_TYP>
                <q5:KNYMI_NUM>${info.KNYMI_NUM}</q5:KNYMI_NUM>
                <q5:KNSHKNHMBI_UNIP>${info.KNSHKNHMBI_UNIP}</q5:KNSHKNHMBI_UNIP>
            </q5:KnshknInfo>
`;
        }
        message += `
        </q5:KNSHKN_INFO>
        <q5:KIIN_FLG>${this.KIIN_FLG}</q5:KIIN_FLG>
        <q5:KSSIHH_TYP>${this.KSSIHH_TYP}</q5:KSSIHH_TYP>
        <q5:KNYSHSI_NM>${this.KNYSHSI_NM}</q5:KNYSHSI_NM>
        <q5:KNYSHMI_NM>${this.KNYSHMI_NM}</q5:KNYSHMI_NM>
        <q5:KNYSHSI_KNNM>${this.KNYSHSI_KNNM}</q5:KNYSHSI_KNNM>
        <q5:KNYSHMI_KNNM>${this.KNYSHMI_KNNM}</q5:KNYSHMI_KNNM>
        <q5:KNYSHPC_MLADDR>${this.KNYSHPC_MLADDR}</q5:KNYSHPC_MLADDR>
        <q5:KNYSHKITI_MLADDR>${this.KNYSHKITI_MLADDR}</q5:KNYSHKITI_MLADDR>
        <q5:KNYSHSHGIKYK_NO>${this.KNYSHSHGIKYK_NO}</q5:KNYSHSHGIKYK_NO>
        <q5:KNYSHSHNIKYK_NO>${this.KNYSHSHNIKYK_NO}</q5:KNYSHSHNIKYK_NO>
        <q5:KNYSHKNYSH_NO>${this.KNYSHKNYSH_NO}</q5:KNYSHKNYSH_NO>
        <q5:KNY_DT>${this.KNY_DT}</q5:KNY_DT>
        <q5:HMBICHNNL_TYP>${this.HMBICHNNL_TYP}</q5:HMBICHNNL_TYP>
        <q5:HMBGISH_CD>${this.HMBGISH_CD}</q5:HMBGISH_CD>
        <q5:TRAN_DT>${this.TRAN_DT}</q5:TRAN_DT>
        <q5:FORWARD_CD>${this.FORWARD_CD}</q5:FORWARD_CD>
        <q5:APPROVE_NO>${this.APPROVE_NO}</q5:APPROVE_NO>
        <q5:TRAN_ID>${this.TRAN_ID}</q5:TRAN_ID>
        <q5:GRYKNGK>${this.GRYKNGK}</q5:GRYKNGK>
        <q5:KNYDVC_TYP>${this.KNYDVC_TYP}</q5:KNYDVC_TYP>
`;
        if (this.AU_PAYMETHOD !== '') {
            message += `
        <q5:AU_PAYMETHOD>${this.AU_PAYMETHOD}</q5:AU_PAYMETHOD>
`;
        }
        if (this.GFTCRD_INFO !== null && this.GFTCRD_INFO.GftcrdInfo.length > 0) {
            // tslint:disable-next-line:no-multiline-string
            message += `
        <q5:GFTCRD_INFO>
`;
            for (const info of this.GFTCRD_INFO.GftcrdInfo) {
                message += `
            <q5:GftCrdInfo>
                <q5:GFTCRD_ID>${info.GFTCRD_ID}</q5:GFTCRD_ID>
                <q5:GFTCRDPIN_CD>${info.GFTCRDPIN_CD}</q5:GFTCRDPIN_CD>
                <q5:GFTCRDKSSIKNR_NO>${info.GFTCRDKSSIKNR_NO}</q5:GFTCRDKSSIKNR_NO>
                <q5:KSSI_DT>${info.KSSI_DT}</q5:KSSI_DT>
                <q5:KSSISYNN_NO>${info.KSSISYNN_NO}</q5:KSSISYNN_NO>
                <q5:GFTCRD_STTS>${info.GFTCRD_STTS}</q5:GFTCRD_STTS>
                <q5:RY_MNY>${info.RY_MNY}</q5:RY_MNY>
                <q5:RYME_ZNDK>${info.RYME_ZNDK}</q5:RYME_ZNDK>
                <q5:RYG_ZNDK>${info.RYG_ZNDK}</q5:RYG_ZNDK>
                <q5:TPPNSRVCRSPNS>${info.TPPNSRVCRSPNS.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</q5:TPPNSRVCRSPNS>
            </q5:GftCrdInfo>
`;
            }
            // tslint:disable-next-line:no-multiline-string
            message += `
        </q5:GFTCRD_INFO>
`;
        }
        message += `
        <q5:DVC_TYP>${this.DVC_TYP}</q5:DVC_TYP>
`;
        if (this.HIYKSSI_FLG === '1') {
            message += `
        <q5:HIYKSSI_FLG>${this.HIYKSSI_FLG}</q5:HIYKSSI_FLG>
        <q5:HIYKSSIHH_TYP>${this.HIYKSSIHH_TYP}</q5:HIYKSSIHH_TYP>
        <q5:HIYKSSIRYGKI_MNY>${this.HIYKSSIRYGKI_MNY}</q5:HIYKSSIRYGKI_MNY>
`;
        }
        if (this.WEBMONEYKSSIINFO !== null) {
            message += `
        <q5:WEBMONEYKSSIINFO>
            <q5:DECRYPTEDKSSIINFO>${this.WEBMONEYKSSIINFO.DECRYPTEDKSSIINFO}</q5:DECRYPTEDKSSIINFO>
            <q5:VRSINJH>${this.WEBMONEYKSSIINFO.VRSINJH}</q5:VRSINJH>
            <q5:WBMNYSETTLE_CD>${this.WEBMONEYKSSIINFO.WBMNYSETTLE_CD}</q5:WBMNYSETTLE_CD>
            <q5:TRAN_DT>${this.WEBMONEYKSSIINFO.TRAN_DT}</q5:TRAN_DT>
            <q5:WBMNYMANAGEMENT_NO>${this.WEBMONEYKSSIINFO.WBMNYMANAGEMENT_NO}</q5:WBMNYMANAGEMENT_NO>
            <q5:SINYJSHKBTS_FLG>${this.WEBMONEYKSSIINFO.SINYJSHKBTS_FLG}</q5:SINYJSHKBTS_FLG>
            <q5:SHHN_NUM>${this.WEBMONEYKSSIINFO.SHHN_NUM}</q5:SHHN_NUM>
            <q5:SHHN_CD>${this.WEBMONEYKSSIINFO.SHHN_CD}</q5:SHHN_CD>
            <q5:HCCH_CD>${this.WEBMONEYKSSIINFO.HCCH_CD}</q5:HCCH_CD>
        </q5:WEBMONEYKSSIINFO>
`;
        }
        else {
            //             format += `
            //         <q5:WEBMONEYKSSIINFO/>
            // `;
        }
        // tslint:disable-next-line:no-multiline-string
        message += `
        <q5:TKTNCDKKH_INFO>`;
        for (const tktncdkkhInfo of this.TKTNCDKKH_INFO) {
            message += `
            <q5:TktncdkkhInfo>
                <q5:TKTNCDKKH_NO>${tktncdkkhInfo.TKTNCDKKH_NO}</q5:TKTNCDKKH_NO>
            </q5:TktncdkkhInfo>
`;
        }
        // tslint:disable-next-line:no-multiline-string
        message += `
        </q5:TKTNCDKKH_INFO>

        <q5:PINTRY_FLG>${this.PINTRY_FLG}</q5:PINTRY_FLG>
        `;
        if (this.PTKSSI_UUID !== undefined) {
            message += `
            <q5:PTKSSI_UUID>${this.PTKSSI_UUID}</q5:PTKSSI_UUID>
            `;
        }
        message += `
        <q5:RY_PT>${this.RY_PT}</q5:RY_PT>
    </tns:IN_PARAMETER>
</tns:RegisterPurchaseInfo>
`;
        return message;
    }
}
exports.RegisterPurchaseInfoIn = RegisterPurchaseInfoIn;
