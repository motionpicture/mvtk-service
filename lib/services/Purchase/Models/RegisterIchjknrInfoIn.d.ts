import BaseIn from '../../../common/models/BaseIn';
export default class RegisterIchjknrInfoIn extends BaseIn {
    ACCESS_ID: string;
    ACCESS_PWD: string;
    TKN_ID: string;
    KSSIKNR_NO: string;
    HYJCRD_NO: string;
    CRDMIGNN_NM: string;
    CRDJHHJ_FLG: string;
    KNYSH_CD: string;
    KIIN_FLG: string;
    KNYSHSI_NM: string;
    KNYSHMI_NM: string;
    KNYSHSI_KNNM: string;
    KNYSHMI_KNNM: string;
    KNYSHPC_MLADDR: string;
    KNYSHKITI_MLADDR: string;
    KNYSHSHGIKYK_NO: string;
    KNYSHSHNIKYK_NO: string;
    KNYSHKNYSH_NO: string;
    MLSF_FLG: string;
    SKHN_CD: string;
    KNSHKNKNR_NO: string;
    AZKRKNSHHRITMNG_TYP: string;
    AZKRKNSHHRISK_TYP: string;
    THREDMGNDIKN_UNIP: number;
    HMBIJTHREDMGNDIKNSHHRISK_TYP: string;
    TICKETICHJKNR_LIST: ArrayOfTicketichjknrList;
    toXml(): string;
}
export interface ArrayOfTicketichjknrList {
    TicketichjknrList: Array<Ticketichjknr>;
}
export interface Ticketichjknr {
    KNSHKNKNR_NO: string;
    KNSHKNKNRMISI_NO: string;
    KNSHKNHMBI_UNIP: string;
    MVITCKTHIKYFTNTSURY_UNIP: string;
    MVITCKTKGYFTNTSURY_UNIP: string;
    MVITCKTUSRTSURY_UNIP: string;
    SHHZI_RT: string;
    SHHZI_TYP: string;
    SHHZI_UNIP: string;
    KNYMI_NUM: string;
}
