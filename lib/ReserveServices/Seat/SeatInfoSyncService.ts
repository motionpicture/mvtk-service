import Service from '../../Common/Service';
import Constants from '../../Common/Util/Constants';
import {ISeatInfoSyncIn, SeatInfoSyncIn} from './Models/SeatInfoSyncIn';
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
     * @param {ISeatInfoSyncIn} params
     * @return {Promise<SeatInfoSyncResult>}
     */
    public seatInfoSync(params: ISeatInfoSyncIn): Promise<SeatInfoSyncResult> {
        const method = 'SeatInfoSync';
        return new Promise((resolve, reject) => {
            const args = new SeatInfoSyncIn(params);

            let seatInfoSyncResult: SeatInfoSyncResult;

            this.call(method, args, (err, response, result) => {
                if (err || !response) return reject(err);

                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    seatInfoSyncResult = SeatInfoSyncResult.PARSE(result);
                }

                return resolve(seatInfoSyncResult);
            });
        });
    }
}
