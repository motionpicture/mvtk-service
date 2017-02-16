/**
 * Defines constants, enums, and utility functions for use with the Purchase service.
 */
/**
 * 決済方法区分
 */
export declare const KSSIHH_TYP_CREDIT_CARD: string;
export declare const KSSIHH_TYP_AU: string;
export declare const KSSIHH_TYP_DOCOMO: string;
export declare const KSSIHH_TYP_GIFT_CARD: string;
export declare const KSSIHH_TYP_WEB_MONEY: string;
/**
 * 購入デバイス区分
 */
export declare const KNYDVC_TYP_PC = "01";
export declare const KNYDVC_TYP_MB = "02";
export declare const KNYDVC_TYP_SP = "09";
export declare const KNYDVC_TYP_CT = "91";
export declare const KNYDVC_TYP_MC = "92";
export declare const KNYDVC_TYP_AMZN = "93";
/**
 * チケットの販売チャネル
 *
 * 01:ムビチケサイト
 * 03:コンビニ
 * 04:プレイガイド
 * 05:メイジャー営業
 * 06:興行営業
 * 07:ムビチケ営業
 * 08:法人委託販売
 * 09:興行サイト
 * 10:カード券販売
 * 11:小売店
 * 12:アプリケーション連携
 * 13:イーウェル
 */
export declare const HMBICHNNL_TYP_MVTK_SITE = "01";
export declare const HMBGISH_CD_MVTK = "000000";
/**
 * カード情報入力区分
 */
export declare const CRDTCRDINPUTKBN_INPUT: string;
export declare const CRDTCRDINPUTKBN_REGISTERED: string;
/**
 * メール送付フラグ
 */
export declare const MLSF_FLG_PC = "1";
export declare const MLSF_FLG_MOBILE = "2";
export declare const MLSF_FLG_PC_AND_MOBILE = "3";
/**
 * 本人認証サービス対応区分
 */
export declare const AUTHENTICATION_SERVICE_SUPPORT: string;
export declare const AUTHENTICATION_SERVICE_NOT_SUPPORT: string;
/**
 * 決済エラー種類区分
 */
export declare const CLIENT_ERROR: string;
export declare const SYSTEM_ERROR: string;
/**
 * 回答方式区分
 */
export declare const KITHSHK_TYP_CHOICE = "01";
export declare const KITHSHK_TYP_TEXT = "02";
/**
 * method取得
 * @function
 */
export declare function getMethods(): {
    KSSIHH_TYP_CREDIT_CARD: string;
    KSSIHH_TYP_AU: string;
    KSSIHH_TYP_DOCOMO: string;
    KSSIHH_TYP_GIFT_CARD: string;
    KSSIHH_TYP_WEB_MONEY: string;
};
/**
 * 対応している決済区分か判定
 * @function
 * @param {string} kssiTyp 決済区分
 * @return {boolean}
 */
export declare function isAvailableMethod(kssiTyp: string): boolean;
