/**
 * Defines constants, enums, and utility functions for use with the Purchase service.
 */

/**
 * 決済方法区分
 */
export const KSSIHH_TYP_CREDIT_CARD: string = '00';
export const KSSIHH_TYP_AU: string = '01';
export const KSSIHH_TYP_DOCOMO: string = '02';
export const KSSIHH_TYP_GIFT_CARD: string = '04'; // ムビチケオンラインギフトカード
export const KSSIHH_TYP_WEB_MONEY: string = '07';

/**
 * 購入デバイス区分
 */
export const KNYDVC_TYP_PC = '01'; // PC
export const KNYDVC_TYP_MB = '02'; // 携帯電話
export const KNYDVC_TYP_SP = '09'; // SmartPhone
export const KNYDVC_TYP_CT = '91'; // 法人券
export const KNYDVC_TYP_MC = '92'; // カード券
export const KNYDVC_TYP_AMZN = '93'; // マーケットプレイス

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
export const HMBICHNNL_TYP_MVTK_SITE = '01'; // PC

export const HMBGISH_CD_MVTK = '000000'; // ムビチケ

/**
 * カード情報入力区分
 */
export const CRDTCRDINPUTKBN_INPUT: string = '01'; // 入力された情報を使用
export const CRDTCRDINPUTKBN_REGISTERED: string = '02'; // 登録済みの情報を使用

/**
 * メール送付フラグ
 */
export const MLSF_FLG_PC = '1';
export const MLSF_FLG_MOBILE = '2';
export const MLSF_FLG_PC_AND_MOBILE = '3';

/**
 * 本人認証サービス対応区分
 */
export const AUTHENTICATION_SERVICE_SUPPORT: string = '01'; // 対応している
export const AUTHENTICATION_SERVICE_NOT_SUPPORT: string = '02'; // 対応していない

/**
 * 決済エラー種類区分
 */
export const CLIENT_ERROR: string = '01'; // 顧客都合によるエラー
export const SYSTEM_ERROR: string = '02'; // システムエラー全般

/**
 * 回答方式区分
 */
export const KITHSHK_TYP_CHOICE = '01'; // 選択式
export const KITHSHK_TYP_TEXT = '02'; // 記述式

/**
 * method取得
 * @function
 */
export function getMethods() {
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
export function isAvailableMethod(kssiTyp: string): boolean {
    const types: string[] = [
        KSSIHH_TYP_CREDIT_CARD,
        KSSIHH_TYP_AU,
        KSSIHH_TYP_DOCOMO,
        KSSIHH_TYP_GIFT_CARD,
        KSSIHH_TYP_WEB_MONEY
    ];

    return (types.indexOf(kssiTyp) >= 0);
}
