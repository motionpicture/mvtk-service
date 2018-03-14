/**
 * 購入情報登録out
 */
export declare class RegisterPurchaseInfoResult {
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
    /**
     * 獲得ポイント
     */
    kktkPt: string;
    static parse(resultObject: any): RegisterPurchaseInfoResult;
}