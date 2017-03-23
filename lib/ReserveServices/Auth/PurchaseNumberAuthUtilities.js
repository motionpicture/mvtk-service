/**
 * 購入管理番号認証サービスユーティリティー
 * @namespace ReserveServices.Auth.PurchaseNumberAuthUtilities
 */
"use strict";
/**
 * 情報種別コード 有効券の情報のみ
 * @memberOf ReserveServices.Auth.PurchaseNumberAuthUtilities
 * @const INFORMATION_TYPE_CODE_VALID
 */
exports.INFORMATION_TYPE_CODE_VALID = '1';
/**
 * 情報種別コード 無効券の情報のみ
 * @memberOf ReserveServices.Auth.PurchaseNumberAuthUtilities
 * @const INFORMATION_TYPE_CODE_INVALID
 */
exports.INFORMATION_TYPE_CODE_INVALID = '2';
/**
 * 情報種別コード 有効券・無効券の情報両方
 * @memberOf ReserveServices.Auth.PurchaseNumberAuthUtilities
 * @const INFORMATION_TYPE_CODE_ALL
 */
exports.INFORMATION_TYPE_CODE_ALL = '3';
/**
 * 購入管理番号無効事由（存在無）
 * @memberOf ReserveServices.Auth.PurchaseNumberAuthUtilities
 * @const PURCHASE_INVALIDITY_REASON_NO_EXISTENCE
 */
exports.PURCHASE_INVALIDITY_REASON_NO_EXISTENCE = '01';
/**
 * 購入管理番号無効事由（PINｺｰﾄﾞ必須）
 * @memberOf ReserveServices.Auth.PurchaseNumberAuthUtilities
 * @const PURCHASE_INVALIDITY_REASON_PIN_CODE_REQUIRED
 */
exports.PURCHASE_INVALIDITY_REASON_PIN_CODE_REQUIRED = '02';
/**
 * 購入管理番号無効事由（PINｺｰﾄﾞ認証ｴﾗ）
 * @memberOf ReserveServices.Auth.PurchaseNumberAuthUtilities
 * @const PURCHASE_INVALIDITY_REASON_PIN_CODE_ERROR
 */
exports.PURCHASE_INVALIDITY_REASON_PIN_CODE_ERROR = '03';
/**
 * 購入管理番号無効事由（作品不一致）
 * @memberOf ReserveServices.Auth.PurchaseNumberAuthUtilities
 * @const PURCHASE_INVALIDITY_REASON_FILM_DISCREPANCY
 */
exports.PURCHASE_INVALIDITY_REASON_FILM_DISCREPANCY = '04';
/**
 * 購入管理番号無効事由（未ｱｸﾃｨﾍﾞｰﾄ）
 * @memberOf ReserveServices.Auth.PurchaseNumberAuthUtilities
 * @const PURCHASE_INVALIDITY_REASON_UNACTIVATED
 */
exports.PURCHASE_INVALIDITY_REASON_UNACTIVATED = '05';
/**
 * 購入管理番号無効事由（選択興行対象外）
 * @memberOf ReserveServices.Auth.PurchaseNumberAuthUtilities
 * @const PURCHASE_INVALIDITY_REASON_NOT_ELIGIBLE_FOR_SELECTION
 */
exports.PURCHASE_INVALIDITY_REASON_NOT_ELIGIBLE_FOR_SELECTION = '06';
/**
 * 購入管理番号無効事由（有効期限切れ）
 * @memberOf ReserveServices.Auth.PurchaseNumberAuthUtilities
 * @const PURCHASE_INVALIDITY_REASON_EXPIRED
 */
exports.PURCHASE_INVALIDITY_REASON_EXPIRED = '07';
/**
 * 購入管理番号無効事由（座席予約期間外）
 * @memberOf ReserveServices.Auth.PurchaseNumberAuthUtilities
 * @const PURCHASE_INVALIDITY_REASON_OUTSIDE_SEATING_RESERVATION_PERIOD
 */
exports.PURCHASE_INVALIDITY_REASON_OUTSIDE_SEATING_RESERVATION_PERIOD = '08';
/**
 * 購入管理番号無効事由（その他）
 * @memberOf ReserveServices.Auth.PurchaseNumberAuthUtilities
 * @const PURCHASE_INVALIDITY_REASON_OTHER
 */
exports.PURCHASE_INVALIDITY_REASON_OTHER = '09';
/**
 * 購入管理番号無効事由（座席予約開始前）
 * @memberOf ReserveServices.Auth.PurchaseNumberAuthUtilities
 * @const PURCHASE_INVALIDITY_REASON_BEFORE_THE_SEAT_RESERVATION_STARTS
 */
exports.PURCHASE_INVALIDITY_REASON_BEFORE_THE_SEAT_RESERVATION_STARTS = '11';
/**
 * 購入管理番号無効事由（仮お直り購入番号数不一致）
 * @memberOf ReserveServices.Auth.PurchaseNumberAuthUtilities
 * @const PURCHASE_INVALIDITY_REASON_BEFORE_THE_SEAT_RESERVATION_STARTS
 */
exports.PURCHASE_INVALIDITY_REASON_TEMPORARY_REDEMPTION_NUMBER_PURCHASE_NUMBER_MISMATCH = '12';
