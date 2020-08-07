/**
 * Defines constants, enums, and utility functions for use with the Purchase service.
 */
// tslint:disable:typedef no-unnecessary-class no-stateless-class
export class PurchaseUtilities {

    /**
     * 決済方法区分
     */
    public static KSSIHH_TYP_CREDIT_CARD: string = '00';
    public static KSSIHH_TYP_AU: string = '01';
    public static KSSIHH_TYP_DOCOMO: string = '02';
    public static KSSIHH_TYP_GIFT_CARD: string = '04'; // ムビチケオンラインギフトカード
    public static KSSIHH_TYP_WEB_MONEY: string = '07';
    public static KSSIHH_TYP_POINT: string = '12';
    public static KSSIHH_TYP_RAKUTEN_PAY: string = '22';
    public static KSSIHH_TYP_PROMOTION_CODE: string = '26';
    public static KSSIHH_TYP_EIGA_GIFT: string = '50';
    public static KSSIHH_TYP_LINE_PAY: string = '76';
    public static KSSIHH_TYP_FAMIPAY: string = '88';
    public static KSSIHH_TYP_PAYPAY: string = 'AA';

    /**
     * 購入デバイス区分
     */
    public static KNYDVC_TYP_PC = '01'; // PC
    public static KNYDVC_TYP_MB = '02'; // 携帯電話
    public static KNYDVC_TYP_SP = '09'; // SmartPhone
    public static KNYDVC_TYP_CT = '91'; // 法人券
    public static KNYDVC_TYP_MC = '92'; // カード券
    public static KNYDVC_TYP_AMZN = '93'; // マーケットプレイス

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
     * 16:アプリ
     */
    public static HMBICHNNL_TYP_MVTK_SITE = '01'; // PC
    public static HMBICHNNL_TYP_MVTK_APPS = '16'; // アプリ
    public static HMBGISH_CD_MVTK = '000000'; // ムビチケ

    /**
     * カード情報入力区分
     */
    public static CRDTCRDINPUTKBN_INPUT: string = '01'; // 入力された情報を使用
    public static CRDTCRDINPUTKBN_REGISTERED: string = '02'; // 登録済みの情報を使用

    /**
     * メール送付フラグ
     */
    public static MLSF_FLG_PC = '1';
    public static MLSF_FLG_MOBILE = '2';
    public static MLSF_FLG_PC_AND_MOBILE = '3';

    /**
     * 本人認証サービス対応区分
     */
    public static AUTHENTICATION_SERVICE_SUPPORT: string = '01'; // 対応している
    public static AUTHENTICATION_SERVICE_NOT_SUPPORT: string = '02'; // 対応していない

    /**
     * 決済エラー種類区分
     */
    public static CLIENT_ERROR: string = '01'; // 顧客都合によるエラー
    public static SYSTEM_ERROR: string = '02'; // システムエラー全般

    /**
     * 回答方式区分
     */
    public static KITHSHK_TYP_CHOICE = '01'; // 選択式
    public static KITHSHK_TYP_TEXT = '02'; // 記述式

    /**
     * ポイント利用フラグ
     */
    public static PINTRY_FLG_NOT_USED = '0';
    public static PINTRY_FLG_USED = '1';

    /**
     * method取得
     */
    public static getMethods() {
        return {
            KSSIHH_TYP_CREDIT_CARD: 'クレジットカード',
            KSSIHH_TYP_RAKUTEN_PAY: '楽天ペイ(旧:楽天ID決済)',
            KSSIHH_TYP_AU: 'AU',
            KSSIHH_TYP_DOCOMO: 'ドコモケータイ払い',
            KSSIHH_TYP_GIFT_CARD: 'ムビチケギフトカード',
            KSSIHH_TYP_WEB_MONEY: 'WebMoney',
            KSSIHH_TYP_POINT: 'ポイント',
            KSSIHH_TYP_PROMOTION_CODE: 'プロモーションコード',
            KSSIHH_TYP_EIGA_GIFT: '映画GIFT',
            KSSIHH_TYP_LINE_PAY: 'LINE Pay',
            KSSIHH_TYP_FAMIPAY: 'ファミペイ',
            KSSIHH_TYP_PAYPAY: 'PayPay'

        };
    }

    /**
     * 対応している決済区分か判定
     * @param kssiTyp 決済区分
     */
    public static isAvailableMethod(kssiTyp: string): boolean {
        const types: string[] = [
            this.KSSIHH_TYP_CREDIT_CARD,
            this.KSSIHH_TYP_RAKUTEN_PAY,
            this.KSSIHH_TYP_AU,
            this.KSSIHH_TYP_DOCOMO,
            this.KSSIHH_TYP_GIFT_CARD,
            this.KSSIHH_TYP_WEB_MONEY,
            this.KSSIHH_TYP_POINT,
            this.KSSIHH_TYP_PROMOTION_CODE,
            this.KSSIHH_TYP_EIGA_GIFT,
            this.KSSIHH_TYP_LINE_PAY,
            this.KSSIHH_TYP_FAMIPAY,
            this.KSSIHH_TYP_PAYPAY
        ];

        return (types.indexOf(kssiTyp) >= 0);
    }
}

export interface IPurchaseUtilities {
    /**
     * 決済方法区分 クレジットカード
     */
    KSSIHH_TYP_CREDIT_CARD: string;
    /**
     * 決済方法区分 楽天ペイ
     */
    KSSIHH_TYP_RAKUTEN_PAY: string;
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
     * 決済方法区分 プロモーションコードのみ
     */
    KSSIHH_TYP_PROMOTION_CODE: string;
    /**
     * 決済方法区分 映画GIFTのみ
     */
    KSSIHH_TYP_EIGA_GIFT: string;
    /**
     * 決済方法区分 LINE Payのみ
     */
    KSSIHH_TYP_LINE_PAY: string;
    /**
     * 決済方法区分 ファミペイのみ
     */
    KSSIHH_TYP_FAMIPAY: string;
    /**
     * 決済方法区分 PayPayのみ
     */
    KSSIHH_TYP_PAYPAY: string;

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
     * チケットの販売チャネル アプリ
     */
    HMBICHNNL_TYP_MVTK_APPS: string;

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
     * ポイント利用フラグ
     */
    PINTRY_FLG_NOT_USED: string;
    PINTRY_FLG_USED: string;

    /**
     * method取得
     */
    getMethods(): {
        KSSIHH_TYP_CREDIT_CARD: string;
        KSSIHH_TYP_RAKUTEN_PAY: string;
        KSSIHH_TYP_AU: string;
        KSSIHH_TYP_DOCOMO: string;
        KSSIHH_TYP_GIFT_CARD: string;
        KSSIHH_TYP_WEB_MONEY: string;
        KSSIHH_TYP_POINT: string;
        KSSIHH_TYP_PROMOTION_CODE: string;
        KSSIHH_TYP_EIGA_GIFT: string;
        KSSIHH_TYP_LINE_PAY: string;
        KSSIHH_TYP_FAMIPAY: string;
        KSSIHH_TYP_PAYPAY: string;
    };

    /**
     * 対応している決済区分か判定
     */
    isAvailableMethod(kssiTyp: string): boolean;
}
