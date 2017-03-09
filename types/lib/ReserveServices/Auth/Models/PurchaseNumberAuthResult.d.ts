import InvalidTicketResult from './InvalidTicketResult';
import ValidTickettResult from './ValidTickettResult';
/**
 * 購入管理番号認証out
 * @class PurchaseNumberAuthResult
 */
export default class PurchaseNumberAuthResult {
    /**
     * 購入管理番号
     */
    knyknrNo: string;
    /**
     * KNYKNR_NO_MKUJYU_CD
     */
    knyknrNomkujyuCd: string;
    /**
     * 興行ギフト券購入年月日
     */
    kgygftknknyYmd: string;
    /**
     * 興行ギフト券有効期間
     */
    kgygftknykTm: string;
    /**
     * 電子券区分
     */
    dnshKmTyp: string;
    /**
     * 前売券区分
     */
    znkkkytsknGkjknTyp: string;
    /**
     * 有効券枚数
     */
    ykknmiNum: string;
    /**
     * 無効券枚数
     */
    mkknmiNum: string;
    /**
     * 有効券情報リスト
     */
    ykknInfo: ValidTickettResult[];
    /**
     * 無効券情報リスト
     */
    mkknInfo: InvalidTicketResult[];
    /**
     * データ整形
     *
     * @param {any} resultObject
     * @returns {PurchaseNumberAuthResult} 購入管理番号認証out
     */
    static parse(resultObject: any): PurchaseNumberAuthResult;
}
