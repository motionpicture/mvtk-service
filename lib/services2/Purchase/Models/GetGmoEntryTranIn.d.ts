import BaseIn from '../../../common/models/BaseIn';
/**
 * 代行会社取引登録呼出inクラス
 * @class
 * @extends {BaseIn}
 */
export declare class GetGmoEntryTranIn extends BaseIn {
    /**
     * 決済管理番号
     */
    KSSIKNR_NO: string;
    /**
     * 決済方法区分
     */
    KSSIHH_TYP: string;
    /**
     * ご利用金額
     */
    GRYKNGK: string;
    /**
     * 購入者コード
     */
    KNYSH_CD: string;
    /**
     * 会員フラグ
     */
    KIIN_FLG: string;
    /**
     * 併用決済フラグ
     */
    HIYKSSI_FLG: string;
    /**
     * 併用決済区分
     */
    HIYKSSI_TYP: string;
    /**
     * 作品コード
     */
    SKHN_CD: string;
    toXml(): string;
}
/**
 * 代行会社取引登録呼出in
 * @interface
 */
export interface IGetGmoEntryTranIn {
    /**
     * 決済管理番号
     */
    KSSIKNR_NO: string;
    /**
     * 決済方法区分
     */
    KSSIHH_TYP: string;
    /**
     * ご利用金額
     */
    GRYKNGK: string;
    /**
     * 購入者コード
     */
    KNYSH_CD: string;
    /**
     * 会員フラグ
     */
    KIIN_FLG: string;
    /**
     * 併用決済フラグ
     */
    HIYKSSI_FLG: string;
    /**
     * 併用決済区分
     */
    HIYKSSI_TYP: string;
    /**
     * 作品コード
     */
    SKHN_CD: string;
}
