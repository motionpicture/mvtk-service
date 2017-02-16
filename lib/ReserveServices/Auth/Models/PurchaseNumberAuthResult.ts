import * as CommonUtil from '../../../Common/Util/Util';
import MkknInfoResult from './MkknInfoResult';
import YkknInfoResult from './YkknInfoResult';

/**
 * 購入管理番号認証Out
 * @class
 */
export default class PurchaseNumberAuthResult {
    /**
     * 券種管理番号
     */
    public knyknrNo: string;
    /**
     * KNYKNR_NO_MKUJYU_CD
     */
    public knyknrNomkujyuCd: string;
    /**
     * KGYGFTKNKNY_YMD
     */
    public kgygftknknyYmd: string;
    /**
     * KGYGFTKNYK_TM
     */
    public kgygftknykTm: string;
    /**
     * DNSH_KM_TYP
     */
    public dnshKmTyp: string;
    /**
     * ZNKKKYTSKN_GKJKN_TYP
     */
    public znkkkytsknGkjknTyp: string;
    /**
     * YKKNMI_NUM
     */
    public ykknmiNum: string;
    /**
     * MKKNMI_NUM
     */
    public mkknmiNum: string;
    /**
     * YKKN_INFO
     */
    public ykknInfo: YkknInfoResult[];
    /**
     * MKKN_INFO
     */
    public mkknInfo: MkknInfoResult[];

    /**
     * データ整形
     * @method
     */
    public static PARSE(resultObject: any): PurchaseNumberAuthResult {
        const purchaseNumberAuthResult = new PurchaseNumberAuthResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            if (normalizedName === 'ykknInfo') {
                const ykknInfos: YkknInfoResult[] = [];

                if (property !== null && property.hasOwnProperty('YkknInfo')) {
                    if (Array.isArray(property.YkknInfo)) {
                        for (const info of property.YkknInfo) {
                            ykknInfos.push(YkknInfoResult.PARSE(info));
                        }
                    } else {
                        ykknInfos.push(YkknInfoResult.PARSE(property.YkknInfo));
                    }
                }

                purchaseNumberAuthResult[normalizedName] = ykknInfos;
            } else if (normalizedName === 'mkknInfo') {
                const mkknInfos: MkknInfoResult[] = [];

                if (property !== null && property.hasOwnProperty('MkknInfo')) {
                    if (Array.isArray(property.MkknInfo)) {
                        for (const info of property.MkknInfo) {
                            mkknInfos.push(MkknInfoResult.PARSE(info));
                        }
                    } else {
                        mkknInfos.push(MkknInfoResult.PARSE(property.MkknInfo));
                    }
                }

                purchaseNumberAuthResult[normalizedName] = mkknInfos;
            } else {
                (<any>purchaseNumberAuthResult)[normalizedName] = property;
            }
        });

        return purchaseNumberAuthResult;
    };

}
