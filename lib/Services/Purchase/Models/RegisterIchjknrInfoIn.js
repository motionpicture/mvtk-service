"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseIn_1 = require("../../../common/models/BaseIn");
// tslint:disable:max-line-length
/**
 * RegisterIchjknrInfoIn
 */
class RegisterIchjknrInfoIn extends BaseIn_1.BaseIn {
    toXml() {
        let message = `
<tns:RegisterIchjknr>
    <tns:model>
        <q23:RegisterIchjknrInfoIn>
            <q23:ACCESS_ID>${this.ACCESS_ID}</q23:ACCESS_ID>
            <q23:ACCESS_PWD>${this.ACCESS_PWD}</q23:ACCESS_PWD>
            <q23:AZKRKNSHHRISK_TYP>${this.AZKRKNSHHRISK_TYP}</q23:AZKRKNSHHRISK_TYP>
            <q23:AZKRKNSHHRITMNG_TYP>${this.AZKRKNSHHRITMNG_TYP}</q23:AZKRKNSHHRITMNG_TYP>
            <q23:CRDJHHJ_FLG>${this.CRDJHHJ_FLG}</q23:CRDJHHJ_FLG>
            <q23:CRDMIGNN_NM xsi:nil="true">${this.CRDMIGNN_NM}</q23:CRDMIGNN_NM>
            <q23:HMBIJTHREDMGNDIKNSHHRISK_TYP>${this.HMBIJTHREDMGNDIKNSHHRISK_TYP}</q23:HMBIJTHREDMGNDIKNSHHRISK_TYP>
            <q23:HYJCRD_NO xsi:nil="true">${this.HYJCRD_NO}</q23:HYJCRD_NO>
            <q23:KIIN_FLG>${this.KIIN_FLG}</q23:KIIN_FLG>
            <q23:KNSHKNKNR_NO>${this.KNSHKNKNR_NO}</q23:KNSHKNKNR_NO>
            <q23:KNYSHKITI_MLADDR xsi:nil="true">${this.KNYSHKITI_MLADDR}</q23:KNYSHKITI_MLADDR>
            <q23:KNYSHKNYSH_NO>${this.KNYSHKNYSH_NO}</q23:KNYSHKNYSH_NO>
            <q23:KNYSHMI_KNNM>${this.KNYSHMI_KNNM}</q23:KNYSHMI_KNNM>
            <q23:KNYSHMI_NM>${this.KNYSHMI_NM}</q23:KNYSHMI_NM>
            <q23:KNYSHPC_MLADDR>${this.KNYSHPC_MLADDR}</q23:KNYSHPC_MLADDR>
            <q23:KNYSHSHGIKYK_NO>${this.KNYSHSHGIKYK_NO}</q23:KNYSHSHGIKYK_NO>
            <q23:KNYSHSHNIKYK_NO>${this.KNYSHSHNIKYK_NO}</q23:KNYSHSHNIKYK_NO>
            <q23:KNYSHSI_KNNM>${this.KNYSHSI_KNNM}</q23:KNYSHSI_KNNM>
            <q23:KNYSHSI_NM>${this.KNYSHSI_NM}</q23:KNYSHSI_NM>
            <q23:KNYSH_CD>${this.KNYSH_CD}</q23:KNYSH_CD>
            <q23:KSSIKNR_NO>${this.KSSIKNR_NO}</q23:KSSIKNR_NO>
            <q23:MLSF_FLG>${this.MLSF_FLG}</q23:MLSF_FLG>
            <q23:SKHN_CD>${this.SKHN_CD}</q23:SKHN_CD>
            <q23:THREDMGNDIKN_UNIP xsi:nil="true">${(this.THREDMGNDIKN_UNIP !== undefined && this.THREDMGNDIKN_UNIP !== null && this.THREDMGNDIKN_UNIP !== '') ? this.THREDMGNDIKN_UNIP : ''}</q23:THREDMGNDIKN_UNIP>
            <q23:TICKETICHJKNR_LIST>
`;
        for (const info of this.TICKETICHJKNR_LIST.TicketichjknrList) {
            message += `
                <q23:TicketichjknrList>
                    <q23:KNSHKNHMBI_UNIP>${info.KNSHKNHMBI_UNIP}</q23:KNSHKNHMBI_UNIP>
                    <q23:KNSHKNKNRMISI_NO>${info.KNSHKNKNRMISI_NO}</q23:KNSHKNKNRMISI_NO>
                    <q23:KNSHKNKNR_NO>${info.KNSHKNKNR_NO}</q23:KNSHKNKNR_NO>
                    <q23:KNYMI_NUM>${info.KNYMI_NUM}</q23:KNYMI_NUM>
                    <q23:MVITCKTHIKYFTNTSURY_UNIP>${info.MVITCKTHIKYFTNTSURY_UNIP}</q23:MVITCKTHIKYFTNTSURY_UNIP>
                    <q23:MVITCKTKGYFTNTSURY_UNIP>${info.MVITCKTKGYFTNTSURY_UNIP}</q23:MVITCKTKGYFTNTSURY_UNIP>
                    <q23:MVITCKTUSRTSURY_UNIP>${info.MVITCKTUSRTSURY_UNIP}</q23:MVITCKTUSRTSURY_UNIP>
                    <q23:SHHZI_RT>${info.SHHZI_RT}</q23:SHHZI_RT>
                    <q23:SHHZI_TYP>${info.SHHZI_TYP}</q23:SHHZI_TYP>
                    <q23:SHHZI_UNIP>${info.SHHZI_UNIP}</q23:SHHZI_UNIP>
                </q23:TicketichjknrList>
`;
        }
        message += `
            </q23:TICKETICHJKNR_LIST>
            <q23:TKN_ID>${this.TKN_ID}</q23:TKN_ID>
        </q23:RegisterIchjknrInfoIn>
    </tns:model>
</tns:RegisterIchjknr>
`;
        return message;
    }
}
exports.RegisterIchjknrInfoIn = RegisterIchjknrInfoIn;
