import * as CommonUtil from '../../../Common/Util/Util';

/**
 * ギフトカード利用out
 * @class
 */
export default class MvtkGiftCardEntryResult {
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

    public static PARSE(resultObject: any): MvtkGiftCardEntryResult {
        const result: any = new MvtkGiftCardEntryResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            result[normalizedName] = property;
        });

        return result;
    }
}
