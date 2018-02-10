/**
 * Defines constants, enums, and utility functions for use with the GiftCard service.
 */
export declare class GiftCardUtilities {
    /**
     * ムビチケギフトカード認証処理結果
     */
    static GIFT_CARD_ID_AUTH_RESULT_STATUS_SUCCESS: string;
    static GIFT_CARD_ID_AUTH_RESULT_STATUS_W00000: string;
    static GIFT_CARD_ID_AUTH_RESULT_STATUS_ERROR0: string;
    static GIFT_CARD_ID_AUTH_RESULT_STATUS_ERROR1: string;
    static GIFT_CARD_ID_AUTH_RESULT_STATUS_ERROR2: string;
    static GIFT_CARD_ID_AUTH_RESULT_STATUS_ERROR3: string;
    /**
     * ギフトカードステータス
     */
    static GIFT_CARD_STATUS_SUCCESS: string;
    static GIFT_CARD_STATUS_W00000: string;
    static GIFT_CARD_STATUS_ERROR1: string;
    static GIFT_CARD_STATUS_ERROR2: string;
    static GIFT_CARD_STATUS_ERROR3: string;
    static GIFT_CARD_STATUS_ERROR4: string;
    static GIFT_CARD_STATUS_ERROR5: string;
    static GIFT_CARD_STATUS_ERROR6: string;
    /**
     * 取消区分
     */
    static TRKSH_TYP_UNLOCK: string;
    static TRKSH_TYP_CANCEL: string;
    static TRKSH_TYP_FAULT: string;
}
export interface IGiftCardUtilities {
    /**
     * ムビチケギフトカード認証処理結果 成功
     */
    GIFT_CARD_ID_AUTH_RESULT_STATUS_SUCCESS: string;
    /**
     * ムビチケギフトカード認証処理結果 残高不足
     */
    GIFT_CARD_ID_AUTH_RESULT_STATUS_W00000: string;
    /**
     * ムビチケギフトカード認証処理結果 システムエラー
     */
    GIFT_CARD_ID_AUTH_RESULT_STATUS_ERROR0: string;
    /**
     * ムビチケギフトカード認証処理結果 パラメータエラー
     */
    GIFT_CARD_ID_AUTH_RESULT_STATUS_ERROR1: string;
    /**
     * ムビチケギフトカード認証処理結果 ロック失敗
     */
    GIFT_CARD_ID_AUTH_RESULT_STATUS_ERROR2: string;
    /**
     * ムビチケギフトカード認証処理結果 エラー情報有り
     */
    GIFT_CARD_ID_AUTH_RESULT_STATUS_ERROR3: string;
    /**
     * ギフトカードステータス 使用可能
     */
    GIFT_CARD_STATUS_SUCCESS: string;
    /**
     * ギフトカードステータス 残高不足?他決済使用中?
     */
    GIFT_CARD_STATUS_W00000: string;
    /**
     * ギフトカードステータス 該当カードなし
     */
    GIFT_CARD_STATUS_ERROR1: string;
    /**
     * ギフトカードステータス 認証番号NG
     */
    GIFT_CARD_STATUS_ERROR2: string;
    /**
     * ギフトカードステータス 有効期限切れ
     */
    GIFT_CARD_STATUS_ERROR3: string;
    /**
     * ギフトカードステータス 未アクティベート
     */
    GIFT_CARD_STATUS_ERROR4: string;
    /**
     * ギフトカードステータス 認証失敗
     */
    GIFT_CARD_STATUS_ERROR5: string;
    /**
     * ギフトカードステータス 同一種類重複不可
     */
    GIFT_CARD_STATUS_ERROR6: string;
    /**
     * 取消区分 ロック解除
     */
    TRKSH_TYP_UNLOCK: string;
    /**
     * 取消区分 取消
     */
    TRKSH_TYP_CANCEL: string;
    /**
     * 取消区分 障害取消
     */
    TRKSH_TYP_FAULT: string;
}
