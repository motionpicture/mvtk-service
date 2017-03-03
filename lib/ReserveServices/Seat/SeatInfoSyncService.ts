import Service from '../../Common/Service';
import Constants from '../../Common/Util/Constants';
import { ISeatInfoSyncIn, SeatInfoSyncIn } from './Models/SeatInfoSyncIn';
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
     * @return {Promise<SeatInfoSyncResult>} 座席指定情報連携out
     */
    public seatInfoSync(params: ISeatInfoSyncIn): Promise<SeatInfoSyncResult> {
        const method = 'SeatInfoSync';
        return new Promise((resolve, reject) => {
            const args = new SeatInfoSyncIn(params);

            this.call(method, args.toXml(), (err, response, result) => {
                if (err || !response) return reject(err);
                let seatInfoSyncResult: SeatInfoSyncResult | null = null;
                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    seatInfoSyncResult = SeatInfoSyncResult.parse(result);
                    return resolve(seatInfoSyncResult);
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
            });
        });
    }
}
