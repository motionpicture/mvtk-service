import ShyzmtcktInfoResult from './ShyzmtcktInfoResult';
/**
 * 座席予約済チケット検索out
 * @class
 */
export default class ShyzmtcktInfoListResult {
    kiinCd: string;
    shyzmtcktInfo: ShyzmtcktInfoResult[] | null;
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {ShyzmtcktInfoListResult} 座席予約済チケット検索out
     */
    static parse(resultObject: any): ShyzmtcktInfoListResult;
}
