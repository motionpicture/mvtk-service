"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../../../common/util/Util");
/**
 * SeatReservationStatusListResult
 */
class SeatReservationStatusListResult {
    static parse(resultObject) {
        const result = new SeatReservationStatusListResult();
        for (const propertyName in resultObject) {
            const normalizedName = Util_1.Util.normalizePropertyName(propertyName);
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
        }
        return result;
    }
}
exports.SeatReservationStatusListResult = SeatReservationStatusListResult;
