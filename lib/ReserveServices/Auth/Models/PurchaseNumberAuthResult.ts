import * as CommonUtil from '../../../Common/Util/Util';
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
    public knyknrNo: string;
    /**
     * 購入管理番号無効事由区分
     */
    public knyknrNoMkujyuCd: string;
    /**
     * 興行ギフト券購入年月日
     */
    public kgygftknknyYmd: string;
    /**
     * 興行ギフト券有効期間
     */
    public kgygftknykTm: string;
    /**
     * 電子券区分
     */
    public dnshKmTyp: string;
    /**
     * 全国共通券・劇場券区分
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
     * 有効券情報リスト
     */
    public ykknInfo: ValidTickettResult[];
    /**
     * 無効券情報リスト
     */
    public mkknInfo: InvalidTicketResult[];

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
                const ykknInfos: ValidTickettResult[] = [];

                if (property !== null && property.hasOwnProperty('YkknInfo')) {
                    if (Array.isArray(property.YkknInfo)) {
                        for (const info of property.YkknInfo) {
                            ykknInfos.push(ValidTickettResult.parse(info));
                        }
                    } else {
                        ykknInfos.push(ValidTickettResult.parse(property.YkknInfo));
                    }
                }

                purchaseNumberAuthResult[normalizedName] = ykknInfos;
            } else if (normalizedName === 'mkknInfo') {
                const mkknInfos: InvalidTicketResult[] = [];

                if (property !== null && property.hasOwnProperty('MkknInfo')) {
                    if (Array.isArray(property.MkknInfo)) {
                        for (const info of property.MkknInfo) {
                            mkknInfos.push(InvalidTicketResult.parse(info));
                        }
                    } else {
                        mkknInfos.push(InvalidTicketResult.parse(property.MkknInfo));
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
