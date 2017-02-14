import YkknInfoResult from './YkknInfoResult';
import MkknInfoResult from './MkknInfoResult';
/**
 * 購入管理番号認証Out
 * @class
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
     * @method
     */
    static PARSE(resultObject: any): PurchaseNumberAuthResult;
}
