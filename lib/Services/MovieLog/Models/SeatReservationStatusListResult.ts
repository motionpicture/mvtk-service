import * as CommonUtil from '../../../Common/Util/Util';

/**
 * 券種別会員購入鑑賞情報
 * @interface
 */
export interface KnshbtskiinknyyykInfo {
    /**
     * 券種区分名称
     */
    knshkbnNm: string;
    /**
     * 鑑賞券枚数
     */
    knshkmmiNum: string;
}

/**
 * 座席予約状況out
 * @class
 */
export default class SeatReservationStatusListResult {
    /**
     * 座席予約番号
     */
    public zskyykNo: string;
    /**
     * 興行ユーザー座席予約番号
     */
    public kgyusrzskyykNo: string;
    /**
     * 鑑賞予定年月日
     */
    public knshyttYmd: string;
    /**
     * 鑑賞予定時刻
     */
    public knshytiHms: string;
    /**
     * 鑑賞予定サイトコード
     */
    public knshytistCd: string;
    /**
     * サイト名称
     */
    public stNm: string;
    /**
     * 券種別会員購入鑑賞情報(itemArray)
     */
    public knshbtskiinknyyykInfo: KnshbtskiinknyyykInfo[];
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {SeatReservationStatusListResult} 座席予約状況out
     */
    // tslint:disable-next-line:function-name
    public static parse(resultObject: any): SeatReservationStatusListResult {
        const result = new SeatReservationStatusListResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            if (normalizedName === 'knshbtskiinknyyykInfo') {
                const infos: KnshbtskiinknyyykInfo[] = [];
                if (property !== null && property.hasOwnProperty('KnshbtskiinknyyykInfo')) {
                    if (Array.isArray(property.KnshbtskiinknyyykInfo)) {
                        for (const info of property.KnshbtskiinknyyykInfo) {
                            infos.push(info);
                        }
                    } else {
                        infos.push(property.KnshbtskiinknyyykInfo);
                    }
                }

                result[normalizedName] = infos;
            } else {
                (<any>result)[normalizedName] = property;
            }
        });

        return result;
    };

}
