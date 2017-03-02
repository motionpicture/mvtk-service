import Service from '../../Common/Service';
import Constants from '../../Common/Util/Constants';
import { ISeatInfoSyncIn, SeatInfoSyncIn } from './Models/SeatInfoSyncIn';
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
    public seatInfoSync(params: ISeatInfoSyncIn): Promise<SeatInfoSyncResult> {
        const method = 'SeatInfoSync';
        return new Promise((resolve, reject) => {
            const args = new SeatInfoSyncIn(params);

            this.call(method, args.toXml(), (err, response, result) => {
                if (err || !response) return reject(err);
                if (!result.MKKNYKNR_NO_INFO) {
                    return resolve({
                        ZSKYYK_RESULT: result.ZSKYYK_RESULT,
                        MKKNYKNR_NO_INFO: null
                    });
                }
                if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                    const seatInfoSyncInvalidTicketResults: SeatInfoSyncInvalidTicketResult[] = [];

                    if (Array.isArray(result.MKKNYKNR_NO_INFO.MkknyknrNoInfo)) {
                        for (const info of result.MKKNYKNR_NO_INFO.MkknyknrNoInfo) {
                            seatInfoSyncInvalidTicketResults.push(SeatInfoSyncInvalidTicketResult.parse(info));
                        }
                    } else {
                        seatInfoSyncInvalidTicketResults.push(
                            SeatInfoSyncInvalidTicketResult.parse(result.MKKNYKNR_NO_INFO.MkknyknrNoInfo)
                        );
                    }
                    return resolve({
                        ZSKYYK_RESULT: result.ZSKYYK_RESULT,
                        MKKNYKNR_NO_INFO: seatInfoSyncInvalidTicketResults
                    });
                } else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
            });
        });
    }
}
