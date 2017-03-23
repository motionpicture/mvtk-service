/**
 * Defines constants, enums, and utility functions for use with the Purchase service.
 */
"use strict";
/**
 * 決済方法区分
 */
exports.KSSIHH_TYP_CREDIT_CARD = '00';
exports.KSSIHH_TYP_AU = '01';
exports.KSSIHH_TYP_DOCOMO = '02';
exports.KSSIHH_TYP_GIFT_CARD = '04'; // ムビチケオンラインギフトカード
exports.KSSIHH_TYP_WEB_MONEY = '07';
/**
 * 購入デバイス区分
 */
exports.KNYDVC_TYP_PC = '01'; // PC
exports.KNYDVC_TYP_MB = '02'; // 携帯電話
exports.KNYDVC_TYP_SP = '09'; // SmartPhone
exports.KNYDVC_TYP_CT = '91'; // 法人券
exports.KNYDVC_TYP_MC = '92'; // カード券
exports.KNYDVC_TYP_AMZN = '93'; // マーケットプレイス
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
exports.HMBICHNNL_TYP_MVTK_SITE = '01'; // PC
exports.HMBGISH_CD_MVTK = '000000'; // ムビチケ
/**
 * カード情報入力区分
 */
exports.CRDTCRDINPUTKBN_INPUT = '01'; // 入力された情報を使用
exports.CRDTCRDINPUTKBN_REGISTERED = '02'; // 登録済みの情報を使用
/**
 * メール送付フラグ
 */
exports.MLSF_FLG_PC = '1';
exports.MLSF_FLG_MOBILE = '2';
exports.MLSF_FLG_PC_AND_MOBILE = '3';
/**
 * 本人認証サービス対応区分
 */
exports.AUTHENTICATION_SERVICE_SUPPORT = '01'; // 対応している
exports.AUTHENTICATION_SERVICE_NOT_SUPPORT = '02'; // 対応していない
/**
 * 決済エラー種類区分
 */
exports.CLIENT_ERROR = '01'; // 顧客都合によるエラー
exports.SYSTEM_ERROR = '02'; // システムエラー全般
/**
 * 回答方式区分
 */
exports.KITHSHK_TYP_CHOICE = '01'; // 選択式
exports.KITHSHK_TYP_TEXT = '02'; // 記述式
/**
 * method取得
 * @function
 */
function getMethods() {
    return {
        KSSIHH_TYP_CREDIT_CARD: 'クレジットカード',
        KSSIHH_TYP_AU: 'AU',
        KSSIHH_TYP_DOCOMO: 'ドコモケータイ払い',
        KSSIHH_TYP_GIFT_CARD: 'ムビチケギフトカード',
        KSSIHH_TYP_WEB_MONEY: 'WebMoney'
    };
}
exports.getMethods = getMethods;
/**
 * 対応している決済区分か判定
 * @function
 * @param {string} kssiTyp 決済区分
 * @return {boolean}
 */
function isAvailableMethod(kssiTyp) {
    const types = [
        exports.KSSIHH_TYP_CREDIT_CARD,
        exports.KSSIHH_TYP_AU,
        exports.KSSIHH_TYP_DOCOMO,
        exports.KSSIHH_TYP_GIFT_CARD,
        exports.KSSIHH_TYP_WEB_MONEY
    ];
    return (types.indexOf(kssiTyp) >= 0);
}
exports.isAvailableMethod = isAvailableMethod;
