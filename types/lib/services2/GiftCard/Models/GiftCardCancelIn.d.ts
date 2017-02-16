import BaseIn from '../../../Common/models/BaseIn';
/**
 * ムビチケギフトカード取消inクラス
 * @class
 * @extends {BaseIn}
 */
export declare class GiftCardCancelIn extends BaseIn {
    /**
     * ギフトカードID情報
     */
    MVTKGFTCRD_INFO_IN: {
        MvtkGftcrdCancelInfo: MvtkGftcrdCancelInfo[];
    };
    /**
     * 取消区分
     * 決済取消を行う区分
     * 0：ロック解除 1：取消 2：障害取消
     */
    TRKSH_TYP: string;
    /**
     * ギフトカード決済取消を行うデバイスの区分
     * 1：PC 09：SmartPhone
     */
    DVC_TYP: string;
    /**
     * 取消しする作品のコード
     */
    SKHN_CD: string;
    /**
     * 取消しする決済の管理番号
     */
    KSSIKNR_NO: string;
    toXml(): string;
}
/**
 * ギフトカードID情報
 * @interface
 */
export interface MvtkGftcrdCancelInfo {
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
    /**
     * ムビチケオンラインギフトカードで決済した金額
     */
    RYUKNGK: string;
    /**
     * 取消を行う決済処理を要求した日時(取消区分が2の場合は必須)
     */
    SYRYKY_DT: string;
}
/**
 * ムビチケギフトカード取消inクラス
 * @interface
 */
export interface IGiftCardCancelIn {
    /**
     * ギフトカードID情報
     */
    MVTKGFTCRD_INFO_IN: {
        MvtkGftcrdCancelInfo: MvtkGftcrdCancelInfo[];
    };
    /**
     * 取消区分
     * 決済取消を行う区分
     * 0：ロック解除 1：取消 2：障害取消
     */
    TRKSH_TYP: string;
    /**
     * ギフトカード決済取消を行うデバイスの区分
     * 1：PC 09：SmartPhone
     */
    DVC_TYP: string;
    /**
     * 取消しする作品のコード
     */
    SKHN_CD: string;
    /**
     * 取消しする決済の管理番号
     */
    KSSIKNR_NO: string;
}
