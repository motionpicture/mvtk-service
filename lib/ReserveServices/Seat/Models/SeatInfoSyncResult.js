"use strict";
const CommonUtil = require("../../../Common/Util/Util");
const InvalidNoteTypeResult_1 = require("./InvalidNoteTypeResult");
const InvalidTicketDetailedResult_1 = require("./InvalidTicketDetailedResult");
/**
 * 購入管理番号認証out
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
            if (normalizedName === 'mkknshInfo') {
                const mkknshInfos = [];
                if (property !== null && property.hasOwnProperty('MkknshInfo')) {
                    if (Array.isArray(property.MkknshInfo)) {
                        for (const info of property.MkknshInfo) {
                            mkknshInfos.push(InvalidNoteTypeResult_1.default.parse(info));
                        }
                    }
                    else {
                        mkknshInfos.push(InvalidNoteTypeResult_1.default.parse(property.MkknshInfo));
                    }
                }
                seatInfoSyncServiceResult[normalizedName] = mkknshInfos;
            }
            else if (normalizedName === 'mkknShsiInfo') {
                const mkknShsiInfos = [];
                if (property !== null && property.hasOwnProperty('MkknShsiInfo')) {
                    if (Array.isArray(property.MkknShsiInfo)) {
                        for (const info of property.MkknShsiInfo) {
                            mkknShsiInfos.push(InvalidTicketDetailedResult_1.default.parse(info));
                        }
                    }
                    else {
                        mkknShsiInfos.push(InvalidTicketDetailedResult_1.default.parse(property.MkknShsiInfo));
                    }
                }
                seatInfoSyncServiceResult[normalizedName] = mkknShsiInfos;
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
