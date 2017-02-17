import MkknInfoResult from './MkknInfoResult';
import YkknInfoResult from './YkknInfoResult';
/**
 * 購入管理番号認証out
 * @class PurchaseNumberAuthResult
 */
export default class PurchaseNumberAuthResult {
    /**
     * 券種管理番号
     */
    knyknrNo: string;
    /**
     * KNYKNR_NO_MKUJYU_CD
     */
    knyknrNomkujyuCd: string;
    /**
     * KGYGFTKNKNY_YMD
     */
    kgygftknknyYmd: string;
    /**
     * KGYGFTKNYK_TM
     */
    kgygftknykTm: string;
    /**
     * DNSH_KM_TYP
     */
    dnshKmTyp: string;
    /**
     * ZNKKKYTSKN_GKJKN_TYP
     */
    znkkkytsknGkjknTyp: string;
    /**
     * YKKNMI_NUM
     */
    ykknmiNum: string;
    /**
     * MKKNMI_NUM
     */
    mkknmiNum: string;
    /**
     * YKKN_INFO
     */
    ykknInfo: YkknInfoResult[];
    /**
     * MKKN_INFO
     */
    mkknInfo: MkknInfoResult[];
    /**
     * データ整形
     *
     * @param {any} resultObject
     * @returns {PurchaseNumberAuthResult} 購入管理番号認証out
     */
    static parse(resultObject: any): PurchaseNumberAuthResult;
}
