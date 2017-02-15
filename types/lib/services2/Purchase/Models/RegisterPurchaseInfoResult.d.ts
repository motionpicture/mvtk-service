export default class RegisterPurchaseInfoResult {
    /**
     * 購入管理番号
     */
    knyknrNo: string;
    /**
     * デジタルインセンティブダウンロード画面ＵＲＬ
     */
    dgtlincntvdwnlodgmnUrl: string;
    /**
     * 決済エラー種類区分
     */
    kssierrrshriTyp: string;
    /**
     * 決済エラーメッセージ
     */
    kssierrrmssgTxt: string;
    static PARSE(resultObject: any): RegisterPurchaseInfoResult;
}
