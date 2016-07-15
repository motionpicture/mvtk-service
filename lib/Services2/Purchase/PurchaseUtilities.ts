/**
* Defines constants, enums, and utility functions for use with the Purchase service.
*/
export default class PurchaseUtilities {
    /**
     * 決済方法区分
     */
    public static KSSIHH_TYP_CREDIT_CARD: string = '00';
    public static KSSIHH_TYP_AU: string = '01';
    public static KSSIHH_TYP_DOCOMO: string = '02';
    public static KSSIHH_TYP_GIFT_CARD: string = '04'; // ムビチケオンラインギフトカード
    public static KSSIHH_TYP_WEB_MONEY: string = '07';

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
     */
    public static HMBICHNNL_TYP_MVTK_SITE = '01'; // PC

    public static HMBGISH_CD_MVTK = '000000' // ムビチケ

    /**
     * カード情報入力区分
     */
    public static CRDTCRDINPUTKBN_INPUT: string      = '01'; // 入力された情報を使用
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
    public static AUTHENTICATION_SERVICE_SUPPORT: string     = '01'; // 対応している
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

    public static getMethods() {
        let methods: Object = {};
        methods[PurchaseUtilities.KSSIHH_TYP_CREDIT_CARD] = 'クレジットカード';
        methods[PurchaseUtilities.KSSIHH_TYP_AU] = 'AU';
        methods[PurchaseUtilities.KSSIHH_TYP_DOCOMO] = 'ドコモケータイ払い';
        methods[PurchaseUtilities.KSSIHH_TYP_GIFT_CARD] = 'ムビチケギフトカード';
        methods[PurchaseUtilities.KSSIHH_TYP_WEB_MONEY] = 'WebMoney';

        return methods;
    }

    /**
     * 対応している決済区分か判定
     *
     * @param {string} kssiTyp 決済区分
     * @return {boolean}
     */
    public static isAvailableMethod(kssiTyp): boolean {
        let types: Array<string> = [
            PurchaseUtilities.KSSIHH_TYP_CREDIT_CARD,
            PurchaseUtilities.KSSIHH_TYP_AU,
            PurchaseUtilities.KSSIHH_TYP_DOCOMO,
            PurchaseUtilities.KSSIHH_TYP_GIFT_CARD,
            PurchaseUtilities.KSSIHH_TYP_WEB_MONEY
        ];

        return (types.indexOf(kssiTyp) >= 0);
    }
}
