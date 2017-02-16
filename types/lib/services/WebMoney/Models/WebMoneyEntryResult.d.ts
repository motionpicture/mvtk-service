/**
 * WebMoney決済実行out
 * @class
 */
export default class WebMoneyEntryResult {
    rdirktUrl: string;
    static PARSE(resultObject: any): WebMoneyEntryResult;
}
