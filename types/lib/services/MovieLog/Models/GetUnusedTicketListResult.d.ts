import TicktResult from './TicktResult';
/**
 * 未使用チケット検索out
 * @class
 */
export default class GetUnusedTicketListResult {
    kiinCd: string;
    mshyticktInfo: TicktResult[];
    static PARSE(resultObject: any): GetUnusedTicketListResult;
}
