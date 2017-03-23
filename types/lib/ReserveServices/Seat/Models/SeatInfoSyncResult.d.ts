import SeatInfoSyncInvalidTicketResult from './SeatInfoSyncInvalidTicketResult';
/**
 * 座席指定情報連携無効券
 * @class
 */
export default class SeatInfoSyncResult {
    /**
     * 座席予約結果
     */
    zskyykResult: string;
    /**
     * 無効購入管理番号情報
     */
    mkknyknrNoInfo: SeatInfoSyncInvalidTicketResult[];
    /**
     * データ整形
     *
     * @param {any} resultObject
     * @returns {SeatInfoSyncResult} 購入管理番号認証out
     */
    static parse(resultObject: any): SeatInfoSyncResult;
}
