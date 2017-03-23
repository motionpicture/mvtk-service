"use strict";
const CommonUtil = require("../../../Common/Util/Util");
const SeatInfoSyncInvalidTicketResult_1 = require("./SeatInfoSyncInvalidTicketResult");
/**
 * 座席指定情報連携無効券
 * @class
 */
class SeatInfoSyncResult {
    /**
     * データ整形
     *
     * @param {any} resultObject
     * @returns {SeatInfoSyncResult} 購入管理番号認証out
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const seatInfoSyncServiceResult = new SeatInfoSyncResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            if (normalizedName === 'mkknyknrNoInfo') {
                const seatInfoSyncInvalidTicketResults = [];
                if (property !== null && property.hasOwnProperty('MkknyknrNoInfo')) {
                    if (Array.isArray(property.MkknyknrNoInfo)) {
                        for (const info of property.MkknyknrNoInfo) {
                            seatInfoSyncInvalidTicketResults.push(SeatInfoSyncInvalidTicketResult_1.default.parse(info));
                        }
                    }
                    else {
                        seatInfoSyncInvalidTicketResults.push(SeatInfoSyncInvalidTicketResult_1.default.parse(property.MkknyknrNoInfo));
                    }
                }
                seatInfoSyncServiceResult[normalizedName] = seatInfoSyncInvalidTicketResults;
            }
            else {
                seatInfoSyncServiceResult[normalizedName] = property;
            }
        });
        return seatInfoSyncServiceResult;
    }
    ;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SeatInfoSyncResult;
