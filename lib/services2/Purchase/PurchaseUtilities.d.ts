/**
 * Defines constants, enums, and utility functions for use with the Purchase service.
 */
export declare class PurchaseUtilities {
    /**
     * 決済方法区分
     */
    static KSSIHH_TYP_CREDIT_CARD: string;
    static KSSIHH_TYP_AU: string;
    static KSSIHH_TYP_DOCOMO: string;
    static KSSIHH_TYP_GIFT_CARD: string;
    static KSSIHH_TYP_WEB_MONEY: string;
    /**
     * 購入デバイス区分
     */
    static KNYDVC_TYP_PC: string;
    static KNYDVC_TYP_MB: string;
    static KNYDVC_TYP_SP: string;
    static KNYDVC_TYP_CT: string;
    static KNYDVC_TYP_MC: string;
    static KNYDVC_TYP_AMZN: string;
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
    static HMBICHNNL_TYP_MVTK_SITE: string;
    static HMBGISH_CD_MVTK: string;
    /**
     * カード情報入力区分
     */
    static CRDTCRDINPUTKBN_INPUT: string;
    static CRDTCRDINPUTKBN_REGISTERED: string;
    /**
     * メール送付フラグ
     */
    static MLSF_FLG_PC: string;
    static MLSF_FLG_MOBILE: string;
    static MLSF_FLG_PC_AND_MOBILE: string;
    /**
     * 本人認証サービス対応区分
     */
    static AUTHENTICATION_SERVICE_SUPPORT: string;
    static AUTHENTICATION_SERVICE_NOT_SUPPORT: string;
    /**
     * 決済エラー種類区分
     */
    static CLIENT_ERROR: string;
    static SYSTEM_ERROR: string;
    /**
     * 回答方式区分
     */
    static KITHSHK_TYP_CHOICE: string;
    static KITHSHK_TYP_TEXT: string;
    /**
     * method取得
     */
    static getMethods(): {
        KSSIHH_TYP_CREDIT_CARD: string;
        KSSIHH_TYP_AU: string;
        KSSIHH_TYP_DOCOMO: string;
        KSSIHH_TYP_GIFT_CARD: string;
        KSSIHH_TYP_WEB_MONEY: string;
    };
    /**
     * 対応している決済区分か判定
     * @param kssiTyp 決済区分
     */
    static isAvailableMethod(kssiTyp: string): boolean;
}
