/**
 * 手数料・消費税情報取得out
 * @class
 */
export default class GetTsuryShhziInfoResult {
    knshknknrmisiNo: string;
    mvitckthikyftntsuryUnip: string;
    mvitcktkgyftntsuryUnip: string;
    mvitcktusrtsuryUnip: string;
    shhziRt: string;
    shhziTyp: string;
    shhziUnip: string;
    static parse(resultObject: any): GetTsuryShhziInfoResult;
}
