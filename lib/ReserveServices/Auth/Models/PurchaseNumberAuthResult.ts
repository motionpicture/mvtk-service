import * as CommonUtil from '../../../Common/Util/Util';
import MkknInfoResult from './MkknInfoResult';
import YkknInfoResult from './YkknInfoResult';

/**
 * 購入管理番号認証out
 * @class PurchaseNumberAuthResult
 */
export default class PurchaseNumberAuthResult {
    /**
     * 購入管理番号
     */
    public knyknrNo: string;
    /**
     * KNYKNR_NO_MKUJYU_CD
     */
    public knyknrNomkujyuCd: string;
    /**
     * 興行ギフト券購入年月日
     */
    public kgygftknknyYmd: string;
    /**
     * 興行ギフト券有効期間
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
     * 有効券枚数
     */
    public ykknmiNum: string;
    /**
     * 無効券枚数
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
     *
     * @param {any} resultObject
     * @returns {PurchaseNumberAuthResult} 購入管理番号認証out
     */
    // tslint:disable-next-line:function-name
    public static parse(resultObject: any): PurchaseNumberAuthResult {
        const purchaseNumberAuthResult = new PurchaseNumberAuthResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            if (normalizedName === 'ykknInfo') {
                const ykknInfos: YkknInfoResult[] = [];

                if (property !== null && property.hasOwnProperty('YkknInfo')) {
                    if (Array.isArray(property.YkknInfo)) {
                        for (const info of property.YkknInfo) {
                            ykknInfos.push(YkknInfoResult.parse(info));
                        }
                    } else {
                        ykknInfos.push(YkknInfoResult.parse(property.YkknInfo));
                    }
                }

                purchaseNumberAuthResult[normalizedName] = ykknInfos;
            } else if (normalizedName === 'mkknInfo') {
                const mkknInfos: MkknInfoResult[] = [];

                if (property !== null && property.hasOwnProperty('MkknInfo')) {
                    if (Array.isArray(property.MkknInfo)) {
                        for (const info of property.MkknInfo) {
                            mkknInfos.push(MkknInfoResult.parse(info));
                        }
                    } else {
                        mkknInfos.push(MkknInfoResult.parse(property.MkknInfo));
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
