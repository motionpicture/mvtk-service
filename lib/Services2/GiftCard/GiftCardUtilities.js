"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* Defines constants, enums, and utility functions for use with the GiftCard service.
*/
class GiftCardUtilities {
}
/**
 * ムビチケギフトカード認証処理結果
 */
GiftCardUtilities.GIFT_CARD_ID_AUTH_RESULT_STATUS_SUCCESS = 'N00000'; // 成功
GiftCardUtilities.GIFT_CARD_ID_AUTH_RESULT_STATUS_W00000 = 'W00000'; // 残高不足
GiftCardUtilities.GIFT_CARD_ID_AUTH_RESULT_STATUS_ERROR0 = 'E00000'; // システムエラー
GiftCardUtilities.GIFT_CARD_ID_AUTH_RESULT_STATUS_ERROR1 = 'E00001'; // パラメータエラー
GiftCardUtilities.GIFT_CARD_ID_AUTH_RESULT_STATUS_ERROR2 = 'E00002'; // ロック失敗
GiftCardUtilities.GIFT_CARD_ID_AUTH_RESULT_STATUS_ERROR3 = 'E00003'; // エラー情報有り
/**
 * ギフトカードステータス
 */
GiftCardUtilities.GIFT_CARD_STATUS_SUCCESS = 'N00000'; // 使用可能
GiftCardUtilities.GIFT_CARD_STATUS_W00000 = 'W00000'; // 残高不足?他決済使用中?
GiftCardUtilities.GIFT_CARD_STATUS_ERROR1 = 'E00001'; // 該当カードなし
GiftCardUtilities.GIFT_CARD_STATUS_ERROR2 = 'E00002'; // 認証番号NG
GiftCardUtilities.GIFT_CARD_STATUS_ERROR3 = 'E00003'; // 有効期限切れ
GiftCardUtilities.GIFT_CARD_STATUS_ERROR4 = 'E00004'; // 未アクティベート
GiftCardUtilities.GIFT_CARD_STATUS_ERROR5 = 'E00005'; // 認証失敗
GiftCardUtilities.GIFT_CARD_STATUS_ERROR6 = 'E00006'; // 同一種類重複不可
/**
 * 取消区分
 */
GiftCardUtilities.TRKSH_TYP_UNLOCK = '0'; // ロック解除
GiftCardUtilities.TRKSH_TYP_CANCEL = '1'; // 取消
GiftCardUtilities.TRKSH_TYP_FAULT = '2'; // 障害取消
exports.default = GiftCardUtilities;
