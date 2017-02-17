import * as CommonUtil from '../../../Common/Util/Util';
import InvalidNoteTypeResult from './InvalidNoteTypeResult';
import InvalidTicketDetailedResult from './InvalidTicketDetailedResult';

/**
 * 購入管理番号認証out
 * @class
 */
export default class SeatInfoSyncResult {
    /**
     * 券種管理番号
     */
    public knyknrNo: string;
    /**
     * 購入管理番号無効事由区分
     */
    public knyknrNoMkujyuTyp: string;
    /**
     * 購入管理番号別無効券枚数
     */
    public knyknrNobtsMkknmiNum: string;
    /**
     * 無効券種情報
     */
    public mkknshInfo: InvalidNoteTypeResult[];
    /**
     * 無効券詳細情報
     */
    public mkknShsiInfo: InvalidTicketDetailedResult[];

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

            if (normalizedName === 'mkknshInfo') {
                const mkknshInfos: InvalidNoteTypeResult[] = [];

                if (property !== null && property.hasOwnProperty('MkknshInfo')) {
                    if (Array.isArray(property.MkknshInfo)) {
                        for (const info of property.MkknshInfo) {
                            mkknshInfos.push(InvalidNoteTypeResult.parse(info));
                        }
                    } else {
                        mkknshInfos.push(InvalidNoteTypeResult.parse(property.MkknshInfo));
                    }
                }

                seatInfoSyncServiceResult[normalizedName] = mkknshInfos;
            } else if (normalizedName === 'mkknShsiInfo') {
                const mkknShsiInfos: InvalidTicketDetailedResult[] = [];

                if (property !== null && property.hasOwnProperty('MkknShsiInfo')) {
                    if (Array.isArray(property.MkknShsiInfo)) {
                        for (const info of property.MkknShsiInfo) {
                            mkknShsiInfos.push(InvalidTicketDetailedResult.parse(info));
                        }
                    } else {
                        mkknShsiInfos.push(InvalidTicketDetailedResult.parse(property.MkknShsiInfo));
                    }
                }

                seatInfoSyncServiceResult[normalizedName] = mkknShsiInfos;
            } else {
                (<any>seatInfoSyncServiceResult)[normalizedName] = property;
            }
        });

        return seatInfoSyncServiceResult;
    };

}
