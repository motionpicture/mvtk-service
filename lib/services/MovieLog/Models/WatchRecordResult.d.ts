export interface KnshbtskiinknyknshInfo {
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
 * watchRecordResult
 */
export declare class WatchRecordResult {
    /**
     * 座席予約番号
     */
    zskyykNo: string;
    /**
     * 鑑賞年月日
     */
    knshYmd: string;
    /**
     * 鑑賞時刻
     */
    knshHms: string;
    /**
     * 鑑賞サイトコード
     */
    knshstCd: string;
    /**
     * 鑑賞サイト名称
     */
    knshstNm: string;
    /**
     * 券種別会員購入鑑賞情報(itemArray)
     */
    knshbtskiinknyknshInfo: KnshbtskiinknyknshInfo[];
    static parse(resultObject: any): WatchRecordResult;
}