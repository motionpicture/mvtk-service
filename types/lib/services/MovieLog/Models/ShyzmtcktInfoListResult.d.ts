import ShyzmtcktInfoResult from './ShyzmtcktInfoResult';
/**
 * 座席予約済チケット検索
 * @class
 */
export default class ShyzmtcktInfoListResult {
    kiinCd: string;
    shyzmtcktInfo: ShyzmtcktInfoResult[] | null;
    static PARSE(resultObject: any): ShyzmtcktInfoListResult;
}
