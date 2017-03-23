/**
 * 一時管理テーブル（情報）取得out
 * @class
 */
export default class SelectIchjknrInfoResult {
    accessId: string;
    accessPwd: string;
    tknId: string;
    kssiknrNo: string;
    hyjcrdNo: string;
    crdjhhjFlg: string;
    crdmignnNm: string;
    knyshCd: string;
    kiinFlg: string;
    knyshsiNm: string;
    knyshmiNm: string;
    knyshsiKnnm: string;
    knyshmiKnnm: string;
    knyshpcMladdr: string;
    knyshkitiMladdr: string;
    knyshshgikykNo: string;
    knyshshnikykNo: string;
    knyshknyshNo: string;
    mlsfFlg: string;
    skhnCd: string;
    skhnNm: string;
    knshknknrNo: string;
    azkrknshhriskTyp: string;
    azkrknshhritmngTyp: string;
    thredmgndiknUnip: string;
    hmbijthredmgndiknshhriskTyp: string;
    knshknknrmisiNo: string;
    knymiNum: string;
    shhziTyp: string;
    shhziRt: string;
    shhziUnip: string;
    mvitckthikyftntsuryUnip: string;
    mvitcktkgyftntsuryUnip: string;
    mvitcktusrtsuryUnip: string;
    knshknhmbiUnip: string;
    pstrgzUrl: string;
    shknhikygishCd: string;
    eishhshkTyp: string;
    knshTyp: string;
    knshkbnNm: string;
    static parse(resultObject: any): SelectIchjknrInfoResult;
}
