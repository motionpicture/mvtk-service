
import { Util } from '../../../common/util/Util';

export interface KnshbtskiinknyyykInfo {
    /**
     * 券種区分名称
     */
    knshkbnNm: string;
    /**
     * 鑑賞券枚数
     */
    knshkmmiNum : string;
}

/**
 * SeatReservationStatusListResult
 */
export class SeatReservationStatusListResult {

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

    public static parse(resultObject: any): SeatReservationStatusListResult {
        const result = new SeatReservationStatusListResult();

        for (const propertyName in resultObject) {
            const normalizedName = Util.normalizePropertyName(propertyName);
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
        }

        return result;
    }

}
