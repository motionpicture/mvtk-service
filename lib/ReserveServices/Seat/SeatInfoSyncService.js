"use strict";
const Service_1 = require("../../Common/Service");
const Constants_1 = require("../../Common/Util/Constants");
const SeatInfoSyncIn_1 = require("./Models/SeatInfoSyncIn");
const SeatInfoSyncInvalidTicketResult_1 = require("./Models/SeatInfoSyncInvalidTicketResult");
/**
 * 座席指定情報連携クラス
 * @class SeatInfoSyncService
 * @extends {Service}
 *
 */
class SeatInfoSyncService extends Service_1.default {
    /**
     * 座席指定情報連携
     *
     * @param {ISeatInfoSyncIn} params 座席指定情報連携in
     * @return {Promise<SeatInfoSyncResult>} 座席指定情報連携out
     */
    seatInfoSync(params) {
        const method = 'SeatInfoSync';
        return new Promise((resolve, reject) => {
            const args = new SeatInfoSyncIn_1.SeatInfoSyncIn(params);
            this.call(method, args.toXml(), (err, response, result) => {
                if (err || !response)
                    return reject(err);
                if (!result.MKKNYKNR_NO_INFO) {
                    return resolve({
                        ZSKYYK_RESULT: result.ZSKYYK_RESULT,
                        MKKNYKNR_NO_INFO: null
                    });
                }
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    const seatInfoSyncInvalidTicketResults = [];
                    if (Array.isArray(result.MKKNYKNR_NO_INFO.MkknyknrNoInfo)) {
                        for (const info of result.MKKNYKNR_NO_INFO.MkknyknrNoInfo) {
                            seatInfoSyncInvalidTicketResults.push(SeatInfoSyncInvalidTicketResult_1.default.parse(info));
                        }
                    }
                    else {
                        seatInfoSyncInvalidTicketResults.push(SeatInfoSyncInvalidTicketResult_1.default.parse(result.MKKNYKNR_NO_INFO.MkknyknrNoInfo));
                    }
                    return resolve({
                        ZSKYYK_RESULT: result.ZSKYYK_RESULT,
                        MKKNYKNR_NO_INFO: seatInfoSyncInvalidTicketResults
                    });
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
            });
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SeatInfoSyncService;
