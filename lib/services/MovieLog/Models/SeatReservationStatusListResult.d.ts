export interface KnshbtskiinknyyykInfo {
    /**
     * 券種区分名称
     */
    knshkbnNm: string;
    /**
     * 鑑賞券枚数
     */
    knshkmmiNum: string;
}
export default class SeatReservationStatusListResult {
    /**
     * 座席予約番号
     */
    zskyykNo: string;
    /**
     * 興行ユーザー座席予約番号
     */
    kgyusrzskyykNo: string;
    /**
     * 鑑賞予定年月日
     */
    knshyttYmd: string;
    /**
     * 鑑賞予定時刻
     */
    knshytiHms: string;
    /**
     * 鑑賞予定サイトコード
     */
    knshytistCd: string;
    /**
     * サイト名称
     */
    stNm: string;
    /**
     * 券種別会員購入鑑賞情報(itemArray)
     */
    knshbtskiinknyyykInfo: Array<KnshbtskiinknyyykInfo>;
    static parse(resultObject: any): SeatReservationStatusListResult;
}
