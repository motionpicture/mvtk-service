/**
 * 券種別会員購入鑑賞情報
 * @interface
 */
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
 * 鑑賞記録リスト検索out
 * @class WatchRecordResult
 */
export default class WatchRecordResult {
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
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {WatchRecordResult} 鑑賞記録リスト検索out
     */
    static parse(resultObject: any): WatchRecordResult;
}
