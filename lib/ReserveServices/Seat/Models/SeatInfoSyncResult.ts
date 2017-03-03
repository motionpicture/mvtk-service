import * as CommonUtil from '../../../Common/Util/Util';
import SeatInfoSyncInvalidTicketResult from './SeatInfoSyncInvalidTicketResult';

/**
 * 座席指定情報連携無効券
 * @class
 */
export default class SeatInfoSyncResult {
    /**
     * 座席予約結果
     */
    public zskyykResult: string;
    /**
     * 無効購入管理番号情報
     */
    public mkknyknrNoInfo: SeatInfoSyncInvalidTicketResult[];

    /**
     * データ整形
     *
     * @param {any} resultObject
     * @returns {SeatInfoSyncResult} 購入管理番号認証out
     */
    // tslint:disable-next-line:function-name
    public static parse(resultObject: any): SeatInfoSyncResult {
        const seatInfoSyncServiceResult = new SeatInfoSyncResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            if (normalizedName === 'mkknyknrNoInfo') {
                const seatInfoSyncInvalidTicketResults: SeatInfoSyncInvalidTicketResult[] = [];
                if (property !== null && property.hasOwnProperty('MkknyknrNoInfo')) {
                    if (Array.isArray(property.MkknyknrNoInfo)) {
                        for (const info of property.MkknyknrNoInfo) {
                            seatInfoSyncInvalidTicketResults.push(SeatInfoSyncInvalidTicketResult.parse(info));
                        }
                    } else {
                        seatInfoSyncInvalidTicketResults.push(
                            SeatInfoSyncInvalidTicketResult.parse(property.MkknyknrNoInfo)
                        );
                    }
                }
                seatInfoSyncServiceResult[normalizedName] = seatInfoSyncInvalidTicketResults;
            } else {
                (<any>seatInfoSyncServiceResult)[normalizedName] = property;
            }
        });

        return seatInfoSyncServiceResult;
    };

}
