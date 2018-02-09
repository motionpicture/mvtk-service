
import { Util } from '../../../common/util/Util';

export interface KnshbtskiinknyknshInfo {
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
 * watchRecordResult
 */
export class WatchRecordResult {
    /**
     * 座席予約番号
     */
    public zskyykNo: string;
    /**
     * 鑑賞年月日
     */
    public knshYmd : string;
    /**
     * 鑑賞時刻
     */
    public knshHms: string;
    /**
     * 鑑賞サイトコード
     */
    public knshstCd: string;
    /**
     * 鑑賞サイト名称
     */
    public knshstNm: string;
    /**
     * 券種別会員購入鑑賞情報(itemArray)
     */
    public knshbtskiinknyknshInfo: KnshbtskiinknyknshInfo[];

    public static parse(resultObject: any): WatchRecordResult {
        const result = new WatchRecordResult();

        for (const propertyName in resultObject) {
            const normalizedName = Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            if (normalizedName === 'knshbtskiinknyknshInfo') {
                const infos: KnshbtskiinknyknshInfo[] = [];
                if (property !== null && property.hasOwnProperty('KnshbtskiinknyknshInfo')) {
                    if (Array.isArray(property.KnshbtskiinknyknshInfo)) {
                        for (const info of property.KnshbtskiinknyknshInfo) {
                            infos.push(info);
                        }
                    } else {
                        infos.push(property.KnshbtskiinknyknshInfo);
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
