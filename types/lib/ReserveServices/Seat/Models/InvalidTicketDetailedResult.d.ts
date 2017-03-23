/**
 * 無効券詳細情報out
 * @class InvalidTicketDetailedResult
 */
export default class InvalidTicketDetailedResult {
    /**
     * 券種区分
     */
    knshTyp: string;
    /**
     * 枚数
     */
    miNum: string;
    /**
     * 無効事由区分
     */
    mkjyTyp: string;
    /**
     * 予約日時
     */
    yykDt: string;
    /**
     * 使用上映日時
     */
    shyJeiDt: string;
    /**
     * 使用サイトコード
     */
    shyStCd: string;
    /**
     * 使用スクリーンコード
     */
    shyScrnCd: string;
    /**
     * 使用作品コード
     */
    shySkhnCd: string;
    /**
     * 使用作品名
     */
    shySkhnNm: string;
    /**
     * データ整形
     *
     * @param {any} resultObject
     * @returns {InvalidTicketDetailedResult} 無効券詳細情報out
     */
    static parse(resultObject: any): InvalidTicketDetailedResult;
}
