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
    static KSSIHH_TYP_POINT: string;
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
        KSSIHH_TYP_POINT: string;
    };
    /**
     * 対応している決済区分か判定
     * @param kssiTyp 決済区分
     */
    static isAvailableMethod(kssiTyp: string): boolean;
    /**
     * ポイント利用フラグ
     */
    static PINTRY_FLG_NOT_USED: string;
    static PINTRY_FLG_USED: string;
}
export interface IPurchaseUtilities {
    /**
     * 決済方法区分 クレジットカード
     */
    KSSIHH_TYP_CREDIT_CARD: string;
    /**
     * 決済方法区分 AU
     */
    KSSIHH_TYP_AU: string;
    /**
     * 決済方法区分 DOCOMO
     */
    KSSIHH_TYP_DOCOMO: string;
    /**
     * 決済方法区分 GIFT
     */
    KSSIHH_TYP_GIFT_CARD: string;
    /**
     * 決済方法区分 WEBMONEY
     */
    KSSIHH_TYP_WEB_MONEY: string;
    /**
     * 決済方法区分 ポイントのみ
     */
    KSSIHH_TYP_POINT: string;
    /**
     * 購入デバイス区分 PC
     */
    KNYDVC_TYP_PC: string;
    /**
     * 購入デバイス区分 携帯電話
     */
    KNYDVC_TYP_MB: string;
    /**
     * 購入デバイス区分 SmartPhone
     */
    KNYDVC_TYP_SP: string;
    /**
     * 購入デバイス区分 法人券
     */
    KNYDVC_TYP_CT: string;
    /**
     * 購入デバイス区分 カード券
     */
    KNYDVC_TYP_MC: string;
    /**
     * 購入デバイス区分 マーケットプレイス
     */
    KNYDVC_TYP_AMZN: string;
    /**
     * チケットの販売チャネル PC
     */
    HMBICHNNL_TYP_MVTK_SITE: string;
    /**
     * チケットの販売チャネル ムビチケ
     */
    HMBGISH_CD_MVTK: string;
    /**
     * カード情報入力区分 入力された情報を使用
     */
    CRDTCRDINPUTKBN_INPUT: string;
    /**
     * カード情報入力区分 登録済みの情報を使用
     */
    CRDTCRDINPUTKBN_REGISTERED: string;
    /**
     * メール送付フラグ PC
     */
    MLSF_FLG_PC: string;
    /**
     * メール送付フラグ SP
     */
    MLSF_FLG_MOBILE: string;
    /**
     * メール送付フラグ PC&SP
     */
    MLSF_FLG_PC_AND_MOBILE: string;
    /**
     * 本人認証サービス対応区分 対応している
     */
    AUTHENTICATION_SERVICE_SUPPORT: string;
    /**
     * 本人認証サービス対応区分 対応していない
     */
    AUTHENTICATION_SERVICE_NOT_SUPPORT: string;
    /**
     * 決済エラー種類区分 顧客都合によるエラー
     */
    CLIENT_ERROR: string;
    /**
     * 決済エラー種類区分 システムエラー全般
     */
    SYSTEM_ERROR: string;
    /**
     * 回答方式区分 選択式
     */
    KITHSHK_TYP_CHOICE: string;
    /**
     * 回答方式区分 記述式
     */
    KITHSHK_TYP_TEXT: string;
    /**
     * method取得
     */
    getMethods(): {
        KSSIHH_TYP_CREDIT_CARD: string;
        KSSIHH_TYP_AU: string;
        KSSIHH_TYP_DOCOMO: string;
        KSSIHH_TYP_GIFT_CARD: string;
        KSSIHH_TYP_WEB_MONEY: string;
        KSSIHH_TYP_POINT: string;
    };
    /**
     * 対応している決済区分か判定
     */
    isAvailableMethod(kssiTyp: string): boolean;
    /**
     * ポイント利用フラグ
     */
    PINTRY_FLG_NOT_USED: string;
    PINTRY_FLG_USED: string;
}
