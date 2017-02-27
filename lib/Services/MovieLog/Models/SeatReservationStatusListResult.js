"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * 座席予約状況out
 * @class
 */
class SeatReservationStatusListResult {
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {SeatReservationStatusListResult} 座席予約状況out
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new SeatReservationStatusListResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            if (normalizedName === 'knshbtskiinknyyykInfo') {
                const infos = [];
                if (property !== null && property.hasOwnProperty('KnshbtskiinknyyykInfo')) {
                    if (Array.isArray(property.KnshbtskiinknyyykInfo)) {
                        for (const info of property.KnshbtskiinknyyykInfo) {
                            infos.push(info);
                        }
                    }
                    else {
                        infos.push(property.KnshbtskiinknyyykInfo);
                    }
                }
                result[normalizedName] = infos;
            }
            else {
                result[normalizedName] = property;
            }
        });
        return result;
    }
    ;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SeatReservationStatusListResult;
