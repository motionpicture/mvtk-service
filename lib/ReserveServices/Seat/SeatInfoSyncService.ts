import Service from '../../Common/Service';
import Constants from '../../Common/Util/Constants';
import {ISeatInfoSyncIn, SeatInfoSyncIn} from './Models/SeatInfoSyncIn';
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
     * @param {ISeatInfoSyncIn} params 座席指定情報連携in
     * @return {Promise<SeatInfoSyncResult[]>} 座席指定情報連携out
     */
    public seatInfoSync(params: ISeatInfoSyncIn): Promise<SeatInfoSyncResult> {
        const method = 'SeatInfoSync';
        return new Promise((resolve, reject) => {
            const args = new SeatInfoSyncIn(params);

            this.call(method, args, (err, response, result) => {
                if (err || !response) return reject(err);

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    const seatInfoSyncResults: SeatInfoSyncResult[] = [];
                    if (Array.isArray(result.MKKNYKNR_NO_INFO.MkknyknrNoInfo)) {
                        for (const info of result.MKKNYKNR_NO_INFO.MkknyknrNoInfo) {
                            seatInfoSyncResults.push(SeatInfoSyncResult.parse(info));
                        }
                    } else {
                        seatInfoSyncResults.push(SeatInfoSyncResult.parse(result.MKKNYKNR_NO_INFO.MkknyknrNoInfo));
                    }
                    return resolve(seatInfoSyncResults);
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
            });
        });
    }
}
