import BaseIn from '../../../Common/models/BaseIn';
/**
 * 一時管理テーブル（情報）登録inクラス
 * @class
 * @extends {BaseIn}
 */
export declare class RegisterIchjknrInfoIn extends BaseIn {
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
    THREDMGNDIKN_UNIP: number | string;
    HMBIJTHREDMGNDIKNSHHRISK_TYP: string;
    TICKETICHJKNR_LIST: ArrayOfTicketichjknrList;
    toXml(): string;
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
