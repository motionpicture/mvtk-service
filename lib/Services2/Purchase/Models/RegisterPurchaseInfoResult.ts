import * as CommonUtil from '../../../Common/Util/Util';

export default class RegisterPurchaseInfoResult {
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

    public static PARSE (resultObject): RegisterPurchaseInfoResult {
        let result = new RegisterPurchaseInfoResult();

        for (let propertyName in resultObject) {
            let normalizedName = CommonUtil.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];

            result[normalizedName] = property;
        }

        return result;
    }
}
