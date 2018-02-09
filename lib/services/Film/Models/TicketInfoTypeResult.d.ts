/**
 * 鑑賞券明細情報out
 */
export declare class TicketInfoTypeResult {
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
     */
    static parse(resultObject: any): TicketInfoTypeResult;
}
