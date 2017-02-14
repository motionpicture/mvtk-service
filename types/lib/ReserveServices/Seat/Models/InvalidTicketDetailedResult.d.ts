/**
 * 無効券詳細情報
 * @class
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
     * @method
     */
    static PARSE(resultObject: any): InvalidTicketDetailedResult;
}
