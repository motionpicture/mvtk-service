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
 * SentGiftStatusListResult
 */
export declare class SentGiftStatusListResult {
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
    static parse(resultObject: any): SentGiftStatusListResult;
}
