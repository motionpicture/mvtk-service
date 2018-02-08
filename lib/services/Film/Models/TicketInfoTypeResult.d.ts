/**
 * 鑑賞券明細情報out
 * @class
 */
export default class TicketInfoTypeResult {
    knshknknrmisiNo: string;
    knshTyp: string;
    shhziTyp: string;
    shhziRt: string;
    shhziUnip: string;
    mvitckthikyftntsuryUnip: string;
    mvitcktkgyftntsuryUnip: string;
    mvitcktusrtsuryUnip: string;
    sisnjknRmk: string;
    parknFlg: string;
    knshknhmbiUnip: string;
    knshkbnNm: string;
    eishhshkTyp: string;
    knshkmmiNum: string;
    parkntntiknshFlg: string;
    kmawsskknshTyp: string;
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {TicketInfoTypeResult} 鑑賞券明細情報out
     */
    static parse(resultObject: any): TicketInfoTypeResult;
}
