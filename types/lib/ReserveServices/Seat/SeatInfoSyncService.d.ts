import Service from '../../Common/Service';
import { ISeatInfoSyncIn } from './Models/SeatInfoSyncIn';
import SeatInfoSyncResult from './Models/SeatInfoSyncResult';
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
     * @param {ISeatInfoSyncIn} params
     * @return {Promise<SeatInfoSyncResult>}
     */
    seatInfoSync(params: ISeatInfoSyncIn): Promise<SeatInfoSyncResult>;
}
