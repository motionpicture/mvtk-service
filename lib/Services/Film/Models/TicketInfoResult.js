"use strict";
const CommonUtil = require("../../../Common/Util/Util");
const TicketInfoTypeResult_1 = require("./TicketInfoTypeResult");
/**
 * 鑑賞券情報検索out
 */
class TicketInfoResult {
    constructor() {
        /**
         * 鑑賞券明細情報(itemArray)
         */
        this.knshkmmisiInfo = [];
        /**
         * 券種情報(itemArray)
         */
        this.knshInfo = [];
    }
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {TicketInfoResult} 鑑賞券情報検索out
     */
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new TicketInfoResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            if (normalizedName === 'knshkmmisiInfo') {
                const types = [];
                if (Array.isArray(property.KnshkmmisiInfo)) {
                    for (const info of property.KnshkmmisiInfo) {
                        types.push(TicketInfoTypeResult_1.default.parse(info));
                    }
                }
                else {
                    types.push(TicketInfoTypeResult_1.default.parse(property.KnshkmmisiInfo));
                }
                result[normalizedName] = types;
            }
            else if (normalizedName === 'knshInfo') {
                const types = [];
                if (property !== null && property.hasOwnProperty('KnshInfo')) {
                    if (Array.isArray(property.KnshInfo)) {
                        for (const info of property.KnshInfo) {
                            types.push(TicketInfoTypeResult_1.default.parse(info));
                        }
                    }
                    else {
                        types.push(TicketInfoTypeResult_1.default.parse(property.KnshInfo));
                    }
                }
                result[normalizedName] = types;
            }
            else {
                result[normalizedName] = property;
            }
        });
        return result;
    }
    ;
    /**
     * 販売状態かどうかを取得する
     *
     * @return {boolean}
     */
    isOnSale() {
        //開始時間まで取得
        let startTimeStr;
        if (this.knshknhmbikishHms) {
            startTimeStr = `${this.knshknhmbikishHms.substring(0, 2)}:${this.knshknhmbikishHms.substring(2, 4)}:00`;
        }
        else {
            startTimeStr = '00:00:00';
        }
        // tslint:disable-next-line:max-line-length
        const startStr = `${this.knshknhmbikishYmd.substring(0, 4)}/${this.knshknhmbikishYmd.substring(4, 6)}/${this.knshknhmbikishYmd.substring(6)} ${startTimeStr}`;
        const startTimestamp = Date.parse(startStr);
        // 終日なので23時59分59秒
        // tslint:disable-next-line:max-line-length
        const endStr = `${this.knshknhmbishryYmd.substring(0, 4)}/${this.knshknhmbishryYmd.substring(4, 6)}/${this.knshknhmbishryYmd.substring(6)} 23:59:59`;
        const endTimestamp = Date.parse(endStr);
        const nowTimestamp = Date.now();
        return (startTimestamp <= nowTimestamp && nowTimestamp <= endTimestamp);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TicketInfoResult;
