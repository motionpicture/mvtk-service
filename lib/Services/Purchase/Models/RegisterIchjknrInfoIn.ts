import BaseIn from '../../../Common/models/BaseIn';

/**
 * 一時管理テーブル（情報）登録inクラス
 * @class
 * @extends {BaseIn}
 */
export class RegisterIchjknrInfoIn extends BaseIn {
    public ACCESS_ID: string; // 取引ID
    public ACCESS_PWD: string; // 取引パスワード
    public TKN_ID: string; // トークンID
    public KSSIKNR_NO: string; // 決済管理番号
    public HYJCRD_NO: string; // 表示カード番号
    public CRDMIGNN_NM: string; // カード名義人名称
    public CRDJHHJ_FLG: string; // カード情報保持フラグ
    public KNYSH_CD: string; // 購入者コード
    public KIIN_FLG: string; // 会員フラグ
    public KNYSHSI_NM: string; // 購入者姓名称
    public KNYSHMI_NM: string; // 購入者名名称
    public KNYSHSI_KNNM: string; // 購入者姓カナ名称
    public KNYSHMI_KNNM: string; // 購入者名カナ名称
    public KNYSHPC_MLADDR: string; // 購入者PCメールアドレス
    public KNYSHKITI_MLADDR: string; // 購入者携帯メールアドレス
    public KNYSHSHGIKYK_NO: string; // 購入者市外局番号
    public KNYSHSHNIKYK_NO: string; // 購入者市内局番号
    public KNYSHKNYSH_NO: string; // 購入者加入者番号
    public MLSF_FLG: string; // メール送付フラグ
    public SKHN_CD: string; // 作品コード
    public KNSHKNKNR_NO: string; // 鑑賞券管理番号
    public AZKRKNSHHRITMNG_TYP: string; // 預り金支払タイミング区分
    public AZKRKNSHHRISK_TYP: string; // 預り金支払先区分
    public THREDMGNDIKN_UNIP: number | string; // 3Dメガネ代金単価(type="xs:decimal"なので空を送信する際は、xmlの書き方に注意)
    public HMBIJTHREDMGNDIKNSHHRISK_TYP: string; // 販売時3Dメガネ代金支払先区分
    public TICKETICHJKNR_LIST: ArrayOfTicketichjknrList; // チケット一時管理リスト

    public toXml(): string {
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
            <q23:THREDMGNDIKN_UNIP xsi:nil="true">${(this.THREDMGNDIKN_UNIP) ? this.THREDMGNDIKN_UNIP : ''}</q23:THREDMGNDIKN_UNIP>
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

/**
 * チケット一時管理リスト
 * @interface
 */
export interface ArrayOfTicketichjknrList {
    TicketichjknrList: Ticketichjknr[];
}

/**
 * チケット一時管理リスト詳細
 * @interface
 */
export interface Ticketichjknr {
    /**
     * 鑑賞券管理番号
     */
    KNSHKNKNR_NO: string;
    /**
     * 鑑賞券管理明細番号
     */
    KNSHKNKNRMISI_NO: string;
    /**
     * 鑑賞券販売単価
     */
    KNSHKNHMBI_UNIP: string;
    /**
     * ムビチケ配給負担手数料単価
     */
    MVITCKTHIKYFTNTSURY_UNIP: string;
    /**
     * ムビチケ興行負担手数料単価
     */
    MVITCKTKGYFTNTSURY_UNIP: string;
    /**
     * ムビチケユーザー手数料単価
     */
    MVITCKTUSRTSURY_UNIP: string;
    /**
     * 消費税率
     */
    SHHZI_RT: string;
    /**
     * 消費税区分
     */
    SHHZI_TYP: string;
    /**
     * 消費税単価
     */
    SHHZI_UNIP: string;
    /**
     * 購入枚数
     */
    KNYMI_NUM: string;
}

/**
 * 一時管理テーブル（情報）登録in
 * @interface
 */
export interface IRegisterIchjknrInfoIn {
    /**
     * 取引ID
     */
    ACCESS_ID: string;
    /**
     * 取引パスワード
     */
    ACCESS_PWD: string;
    /**
     * トークンID
     */
    TKN_ID: string;
    /**
     * 決済管理番号
     */
    KSSIKNR_NO: string;
    /**
     * 表示カード番号
     */
    HYJCRD_NO: string;
    /**
     * カード名義人名称
     */
    CRDMIGNN_NM: string;
    /**
     * カード情報保持フラグ
     */
    CRDJHHJ_FLG: string;
    /**
     * 購入者コード
     */
    KNYSH_CD: string;
    /**
     * 会員フラグ
     */
    KIIN_FLG: string;
    /**
     * 購入者姓名称
     */
    KNYSHSI_NM: string;
    /**
     * 購入者名名称
     */
    KNYSHMI_NM: string;
    /**
     * 購入者姓カナ名称
     */
    KNYSHSI_KNNM: string;
    /**
     * 購入者名カナ名称
     */
    KNYSHMI_KNNM: string;
    /**
     * 購入者PCメールアドレス
     */
    KNYSHPC_MLADDR: string;
    /**
     * 購入者携帯メールアドレス
     */
    KNYSHKITI_MLADDR: string;
    /**
     * 購入者市外局番号
     */
    KNYSHSHGIKYK_NO: string;
    /**
     * 購入者市内局番号
     */
    KNYSHSHNIKYK_NO: string;
    /**
     * 購入者加入者番号
     */
    KNYSHKNYSH_NO: string;
    /**
     * メール送付フラグ
     */
    MLSF_FLG: string;
    /**
     * 作品コード
     */
    SKHN_CD: string;
    /**
     * 鑑賞券管理番号
     */
    KNSHKNKNR_NO: string;
    /**
     * 預り金支払タイミング区分
     */
    AZKRKNSHHRITMNG_TYP: string;
    /**
     * 預り金支払先区分
     */
    AZKRKNSHHRISK_TYP: string;
    /**
     * 3Dメガネ代金単価(type="xs:decimal"なので空を送信する際は、xmlの書き方に注意)
     */
    THREDMGNDIKN_UNIP: number;
    /**
     * 販売時3Dメガネ代金支払先区分
     */
    HMBIJTHREDMGNDIKNSHHRISK_TYP: string;
    /**
     * チケット一時管理リスト
     */
    TICKETICHJKNR_LIST: ArrayOfTicketichjknrList;
}
