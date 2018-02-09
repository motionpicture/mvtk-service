
import { Util } from '../../../common/util/Util';

/**
 * MvtkGiftCardEntryResult
 */
export class MvtkGiftCardEntryResult {
    public tppnsrvcrspns: string = ''; // 凸版サービス返却値
    public mvtkgftcrdId: string = ''; // ムビチケギフトカードID
    public mvtkgftcrdpinCd: string = ''; // ムビチケギフトカード認証番号
    public gftcrdkssiknrNo: string = ''; // ギフト決済管理番号
    public ryukngk: string = ''; // 利用金額
    public ryumezndk: string = ''; // 利用前残高
    public zndk: string = ''; // 残高
    public synnNo: string = ''; // 承認番号
    public syrykyDt: string = ''; // 処理要求日時
    public giftcardstatus: string = ''; // ギフトカードステータス

    public static parse(resultObject: any): MvtkGiftCardEntryResult {
        const result = new MvtkGiftCardEntryResult();

        for (const propertyName in resultObject) {
            const normalizedName = Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            (<any>result)[normalizedName] = property;
        }

        return result;
    }
}
