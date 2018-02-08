"use strict";
const Util_1 = require("../../../common/util/Util");
class SeatReservationStatusListResult {
    static parse(resultObject) {
        let result = new SeatReservationStatusListResult();
        for (let propertyName in resultObject) {
            let normalizedName = Util_1.default.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];
            if (normalizedName === 'knshbtskiinknyyykInfo') {
                let infos = [];
                if (property !== null && property.hasOwnProperty('KnshbtskiinknyyykInfo')) {
                    if (Array.isArray(property.KnshbtskiinknyyykInfo)) {
                        for (let info of property.KnshbtskiinknyyykInfo) {
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
    ;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SeatReservationStatusListResult;
