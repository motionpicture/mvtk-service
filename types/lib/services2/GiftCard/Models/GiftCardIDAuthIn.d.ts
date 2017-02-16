import BaseIn from '../../../Common/models/BaseIn';
/**
 * ムビチケギフトカード認証inクラス
 */
export declare class GiftCardIDAuthIn extends BaseIn {
    /**
     *  ギフトカードID情報
     */
    MVTKGFTCRD_INFO_IN: {
        MvtkGftcrdInfo: MvtkGftcrdInfo[];
    };
    /**
     * 利用金額
     */
    KSSIKNR_NO: string;
    /**
     * デバイス区分
     */
    RYUKNGK: string;
    /**
     * ご利用金額
     */
    DVC_TYP: string;
    /**
     * ロックフラグ
     */
    LOCK_FLG: string;
    /**
     * 併用決済フラグ
     */
    HIYKSSI_FLG: string;
    /**
     * 併用決済区分
     */
    HIYKSSI_TYP: string;
    /**
     * 購入者コード
     */
    KNYSH_CD: string;
    /**
     * 会員フラグ
     */
    KIIN_FLG: string;
    /**
     * 作品コード
     */
    SKHN_CD: string;
    toXml(): string;
}
/**
 * ギフトカードID情報
 * @interface
 */
export interface MvtkGftcrdInfo {
    /**
     * ムビチケギフトカードID
     */
    MVTKGFTCRD_ID: string;
    /**
     * ムビチケギフトカードPINコード
     */
    MVTKGFTCRDPIN_CD: string;
    /**
     * ギフトカード決済管理番号
     */
    GFTCRDKSSIKNR_NO: string;
}
/**
 * ムビチケギフトカード認証in
 * @interface
 */
export interface IGiftCardIDAuthIn {
    /**
     *  ギフトカードID情報
     */
    MVTKGFTCRD_INFO_IN: {
        MvtkGftcrdInfo: MvtkGftcrdInfo[];
    };
    /**
     * 利用金額
     */
    KSSIKNR_NO: string;
    /**
     * デバイス区分
     */
    RYUKNGK: string;
    /**
     * ご利用金額
     */
    DVC_TYP: string;
    /**
     * ロックフラグ
     */
    LOCK_FLG: string;
    /**
     * 併用決済フラグ
     */
    HIYKSSI_FLG: string;
    /**
     * 併用決済区分
     */
    HIYKSSI_TYP: string;
    /**
     * 購入者コード
     */
    KNYSH_CD: string;
    /**
     * 会員フラグ
     */
    KIIN_FLG: string;
    /**
     * 作品コード
     */
    SKHN_CD: string;
}
