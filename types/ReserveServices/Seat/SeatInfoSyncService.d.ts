import Service from '../../Common/Service';
import SeatInfoSyncResult from './Models/SeatInfoSyncResult';
/**
 *
 * @class 座席指定情報連携クラス
 * @extends Service
 *
 */
export default class SeatInfoSyncService extends Service {
    /**
     * 座席指定情報連携
     *
     * @param {Object} params
     * @return {Promise<SeatInfoSyncResult>}
     */
    seatInfoSync(params: Object): Promise<SeatInfoSyncResult>;
}
