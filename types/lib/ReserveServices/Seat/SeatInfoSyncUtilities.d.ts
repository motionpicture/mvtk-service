/**
 * 座席指定情報連携サービスユーティリティー
 * @namespace ReserveServices.Seat.SeatInfoSyncUtilities
 */
/**
 * 予約デバイス区分 （未使用）ムビチケサイト
 * @memberOf ReserveServices.Seat.SeatInfoSyncUtilities
 * @const RESERVED_DEVICE_TYPE_MVTK_SITE
 */
export declare const RESERVED_DEVICE_TYPE_MVTK_SITE = "01";
/**
 * 予約デバイス区分 興行サイト(PC)
 * @memberOf ReserveServices.Seat.SeatInfoSyncUtilities
 * @const RESERVED_DEVICE_TYPE_ENTERTAINER_SITE_PC
 */
export declare const RESERVED_DEVICE_TYPE_ENTERTAINER_SITE_PC = "02";
/**
 * 予約デバイス区分 興行サイト(携帯)
 * @memberOf ReserveServices.Seat.SeatInfoSyncUtilities
 * @const RESERVED_DEVICE_TYPE_ENTERTAINER_SITE_SP
 */
export declare const RESERVED_DEVICE_TYPE_ENTERTAINER_SITE_SP = "03";
/**
 * 予約デバイス区分 各劇場窓口(窓口PC)
 * @memberOf ReserveServices.Seat.SeatInfoSyncUtilities
 * @const RESERVED_DEVICE_TYPE_THEATER_PC
 */
export declare const RESERVED_DEVICE_TYPE_THEATER_PC = "04";
/**
 * 予約デバイス区分 自動券売機
 * @memberOf ReserveServices.Seat.SeatInfoSyncUtilities
 * @const RESERVED_DEVICE_TYPE_TICKET_MACHINE
 */
export declare const RESERVED_DEVICE_TYPE_TICKET_MACHINE = "05";
/**
 * 予約デバイス区分 （未使用）自動発券機(ﾑﾋﾞﾁｹ端末)
 * @memberOf ReserveServices.Seat.SeatInfoSyncUtilities
 * @const RESERVED_DEVICE_TYPE_MVTK_TICKET_MACHINE
 */
export declare const RESERVED_DEVICE_TYPE_MVTK_TICKET_MACHINE = "06";
/**
 * 取消フラグ登録
 * @memberOf ReserveServices.Seat.SeatInfoSyncUtilities
 * @const DELETE_FLAG_FALSE
 */
export declare const DELETE_FLAG_FALSE = "0";
/**
 * 取消フラグ削除
 * @memberOf ReserveServices.Seat.SeatInfoSyncUtilities
 * @const DELETE_FLAG_TRUE
 */
export declare const DELETE_FLAG_TRUE = "1";
/**
 * 座席予約成功
 * @memberOf ReserveServices.Seat.SeatInfoSyncUtilities
 * @const RESERVATION_SUCCESS
 */
export declare const RESERVATION_SUCCESS = "01";
/**
 * 座席予約失敗(無効券あり）
 * @memberOf ReserveServices.Seat.SeatInfoSyncUtilities
 * @const RESERVATION_FAILURE_INVALID
 */
export declare const RESERVATION_FAILURE_INVALID = "02";
/**
 * 座席予約失敗(購入管理番号が重複して送信された）
 * @memberOf ReserveServices.Seat.SeatInfoSyncUtilities
 * @const RESERVATION_FAILURE_OVERLAP
 */
export declare const RESERVATION_FAILURE_OVERLAP = "03";
/**
 * 座席予約失敗（着券を要求された券種は存在しない）
 * @memberOf ReserveServices.Seat.SeatInfoSyncUtilities
 * @const RESERVATION_FAILURE_NOT_EXIST
 */
export declare const RESERVATION_FAILURE_NOT_EXIST = "04";
/**
 * 座席予約失敗（その他）
 * @memberOf ReserveServices.Seat.SeatInfoSyncUtilities
 * @const RESERVATION_FAILURE_OTHER
 */
export declare const RESERVATION_FAILURE_OTHER = "09";
/**
 * 取消成功
 * @memberOf ReserveServices.Seat.SeatInfoSyncUtilities
 * @const RESERVATION_CANCEL_SUCCESS
 */
export declare const RESERVATION_CANCEL_SUCCESS = "11";
/**
 * 取消失敗
 * @memberOf ReserveServices.Seat.SeatInfoSyncUtilities
 * @const RESERVATION_CANCEL_FAILURE
 */
export declare const RESERVATION_CANCEL_FAILURE = "19";
