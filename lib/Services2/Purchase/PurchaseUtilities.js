"use strict";
/**
 * Defines constants, enums, and utility functions for use with the Purchase service.
 */
class PurchaseUtilities {
    constructor() {
        /**
         * 決済方法区分
         */
        this.KSSIHH_TYP_CREDIT_CARD = '00';
        this.KSSIHH_TYP_AU = '01';
        this.KSSIHH_TYP_DOCOMO = '02';
        this.KSSIHH_TYP_GIFT_CARD = '04'; // ムビチケオンラインギフトカード
        this.KSSIHH_TYP_WEB_MONEY = '07';
        /**
         * 購入デバイス区分
         */
        this.KNYDVC_TYP_PC = '01'; // PC
        this.KNYDVC_TYP_MB = '02'; // 携帯電話
        this.KNYDVC_TYP_SP = '09'; // SmartPhone
        this.KNYDVC_TYP_CT = '91'; // 法人券
        this.KNYDVC_TYP_MC = '92'; // カード券
        this.KNYDVC_TYP_AMZN = '93'; // マーケットプレイス
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
        this.HMBICHNNL_TYP_MVTK_SITE = '01'; // PC
        this.HMBGISH_CD_MVTK = '000000'; // ムビチケ
        /**
         * カード情報入力区分
         */
        this.CRDTCRDINPUTKBN_INPUT = '01'; // 入力された情報を使用
        this.CRDTCRDINPUTKBN_REGISTERED = '02'; // 登録済みの情報を使用
        /**
         * メール送付フラグ
         */
        this.MLSF_FLG_PC = '1';
        this.MLSF_FLG_MOBILE = '2';
        this.MLSF_FLG_PC_AND_MOBILE = '3';
        /**
         * 本人認証サービス対応区分
         */
        this.AUTHENTICATION_SERVICE_SUPPORT = '01'; // 対応している
        this.AUTHENTICATION_SERVICE_NOT_SUPPORT = '02'; // 対応していない
        /**
         * 決済エラー種類区分
         */
        this.CLIENT_ERROR = '01'; // 顧客都合によるエラー
        this.SYSTEM_ERROR = '02'; // システムエラー全般
        /**
         * 回答方式区分
         */
        this.KITHSHK_TYP_CHOICE = '01'; // 選択式
        this.KITHSHK_TYP_TEXT = '02'; // 記述式
    }
    /**
     * method取得
     * @function
     */
    getMethods() {
        return {
            KSSIHH_TYP_CREDIT_CARD: 'クレジットカード',
            KSSIHH_TYP_AU: 'AU',
            KSSIHH_TYP_DOCOMO: 'ドコモケータイ払い',
            KSSIHH_TYP_GIFT_CARD: 'ムビチケギフトカード',
            KSSIHH_TYP_WEB_MONEY: 'WebMoney'
        };
    }
    /**
     * 対応している決済区分か判定
     * @function
     * @param {string} kssiTyp 決済区分
     * @return {boolean}
     */
    isAvailableMethod(kssiTyp) {
        const types = [
            this.KSSIHH_TYP_CREDIT_CARD,
            this.KSSIHH_TYP_AU,
            this.KSSIHH_TYP_DOCOMO,
            this.KSSIHH_TYP_GIFT_CARD,
            this.KSSIHH_TYP_WEB_MONEY
        ];
        return (types.indexOf(kssiTyp) >= 0);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PurchaseUtilities;
