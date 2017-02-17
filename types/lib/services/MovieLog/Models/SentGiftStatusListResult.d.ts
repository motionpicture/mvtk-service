/**
 * 券種別会員購入鑑賞情報
 * @interface
 */
export interface KnshbtskiinknygftInfo {
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
 * ギフト送信状況リスト検索out
 */
export default class SentGiftStatusListResult {
    /**
     * ギフト管理番号
     */
    gftknrNo: string;
    /**
     * ギフト送信日時
     */
    gftsfDt: string;
    /**
     * 宛先名称
     */
    gftatskNm: string;
    /**
     * ギフトステータス
     */
    gftsttsTyp: string;
    /**
     * 券種別会員購入鑑賞情報(itemArray)
     */
    knshbtskiinknygftInfo: KnshbtskiinknygftInfo[];
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {SentGiftStatusListResult} ギフト送信状況リスト検索out
     */
    static parse(resultObject: any): SentGiftStatusListResult;
}
