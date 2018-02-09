
import { Util } from '../../../common/util/Util';

/**
 * GiftCardCancelResult
 */
export class GiftCardCancelResult {
    /**
     * 凸版サービス返却値
     */
    public tppnsrvcrspns: string = '';
    /**
     * ムビチケギフトカードID
     */
    public mvtkgftcrdId: string = '';
    /**
     * 利用前残高
     */
    public ryumezndk: string = '';
    /**
     * 残高
     */
    public zndk: string = '';
    /**
     * 承認番号
     */
    public synnNo: string = '';
    /**
     * 処理要求日時
     */
    public syrykyDt: string = '';
    /**
     * ギフトカードステータス
     */
    public giftcardstatus: string = '';

    public static parse(resultObject: any): GiftCardCancelResult {
        const result = new GiftCardCancelResult();

        for (const propertyName in resultObject) {
            const normalizedName = Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            (<any>result)[normalizedName] = property;
        }

        return result;
    }
}
