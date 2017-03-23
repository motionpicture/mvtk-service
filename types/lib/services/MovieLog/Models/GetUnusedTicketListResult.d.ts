import TicktResult from './TicktResult';
/**
 * 未使用チケット検索out
 * @class
 */
export default class GetUnusedTicketListResult {
    kiinCd: string;
    mshyticktInfo: TicktResult[];
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {GetUnusedTicketListResult} 未使用チケット検索out
     */
    static parse(resultObject: any): GetUnusedTicketListResult;
}
