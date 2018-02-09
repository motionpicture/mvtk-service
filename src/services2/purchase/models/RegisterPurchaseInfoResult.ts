import { Util } from '../../../common/util/Util';

/**
 * 購入情報登録out
 */
export class RegisterPurchaseInfoResult {
    /**
     * 購入管理番号
     */
    public knyknrNo: string;
    /**
     * デジタルインセンティブダウンロード画面ＵＲＬ
     */
    public dgtlincntvdwnlodgmnUrl: string;
    /**
     * 決済エラー種類区分
     */
    public kssierrrshriTyp: string;
    /**
     * 決済エラーメッセージ
     */
    public kssierrrmssgTxt: string;

    // tslint:disable-next-line:function-name
    public static parse(resultObject: any): RegisterPurchaseInfoResult {
        const result = new RegisterPurchaseInfoResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            (<any>result)[normalizedName] = property;
        });

        return result;
    }
}
