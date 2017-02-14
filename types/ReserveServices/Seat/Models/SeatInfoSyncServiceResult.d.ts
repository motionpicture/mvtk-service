import InvalidNoteTypeResult from 'InvalidNoteTypeResult';
import InvalidTicketDetailedResult from 'InvalidTicketDetailedResult';
/**
 * 購入管理番号認証Out
 * @class
 */
export default class SeatInfoSyncServiceResult {
    /**
     * 券種管理番号
     */
    knyknrNo: string;
    /**
     * 購入管理番号無効事由区分
     */
    knyknrNoMkujyuTyp: string;
    /**
     * 購入管理番号別無効券枚数
     */
    knyknrNobtsMkknmiNum: string;
    /**
     * 無効券種情報
     */
    mkknshInfo: InvalidNoteTypeResult[];
    /**
     * 無効券詳細情報
     */
    mkknShsiInfo: InvalidTicketDetailedResult[];
    /**
     * データ整形
     * @method
     */
    static PARSE(resultObject: any): SeatInfoSyncServiceResult;
}
