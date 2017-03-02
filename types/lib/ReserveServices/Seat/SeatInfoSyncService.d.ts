import Service from '../../Common/Service';
import { ISeatInfoSyncIn } from './Models/SeatInfoSyncIn';
import SeatInfoSyncInvalidTicketResult from './Models/SeatInfoSyncInvalidTicketResult';
/**
 * 座席指定情報連携out
 * @interface SeatInfoSyncResult
 */
export interface SeatInfoSyncResult {
    /**
     * 座席予約結果
     */
    ZSKYYK_RESULT: string;
    /**
     * 無効購入管理番号情報
     */
    MKKNYKNR_NO_INFO: SeatInfoSyncInvalidTicketResult[] | null;
}
/**
 * 座席指定情報連携クラス
 * @class SeatInfoSyncService
 * @extends {Service}
 *
 */
export default class SeatInfoSyncService extends Service {
    /**
     * 座席指定情報連携
     *
     * @param {ISeatInfoSyncIn} params 座席指定情報連携in
     * @return {Promise<SeatInfoSyncResult>} 座席指定情報連携out
     */
    seatInfoSync(params: ISeatInfoSyncIn): Promise<SeatInfoSyncResult>;
}
