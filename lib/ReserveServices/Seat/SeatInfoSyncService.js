"use strict";
const Service_1 = require("../../Common/Service");
const Constants_1 = require("../../Common/Util/Constants");
const SeatInfoSyncIn_1 = require("./Models/SeatInfoSyncIn");
const SeatInfoSyncResult_1 = require("./Models/SeatInfoSyncResult");
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
     * @return {Promise<SeatInfoSyncResult[]>} 座席指定情報連携out
     */
    seatInfoSync(params) {
        const method = 'SeatInfoSync';
        return new Promise((resolve, reject) => {
            const args = new SeatInfoSyncIn_1.SeatInfoSyncIn(params);
            this.call(method, args, (err, response, result) => {
                if (err || !response)
                    return reject(err);
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    const seatInfoSyncResults = [];
                    if (Array.isArray(result.MKKNYKNR_NO_INFO.MkknyknrNoInfo)) {
                        for (const info of result.MKKNYKNR_NO_INFO.MkknyknrNoInfo) {
                            seatInfoSyncResults.push(SeatInfoSyncResult_1.default.parse(info));
                        }
                    }
                    else {
                        seatInfoSyncResults.push(SeatInfoSyncResult_1.default.parse(result.MKKNYKNR_NO_INFO.MkknyknrNoInfo));
                    }
                    return resolve(seatInfoSyncResults);
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
