/**
 * 無効券情報
 * @class InvalidTicketResult
 */
export default class InvalidTicketResult {
    /**
     * 無効券種区分
     */
    mkknshTyp: string;
    /**
     * 無効券種別枚数
     */
    mkknKnshbtsmiNum: string;
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
     * @returns {InvalidTicketResult} InvalidTicketResultout
     */
    static parse(resultObject: any): InvalidTicketResult;
}
