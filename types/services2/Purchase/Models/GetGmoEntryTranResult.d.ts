export default class GetGmoEntryTranResult {
    /**
     * 決済管理番号
     */
    kssiknrNo: string;
    /**
     * 取引ＩＤ
     */
    accessId: string;
    /**
     * 取引パスワード
     */
    accessPwd: string;
    /**
     * 決済エラー種類区分
     */
    kssierrrshriTyp: string;
    /**
     * 決済エラーメッセージ本文
     */
    kssierrrmssgTxt: string;
    static PARSE(resultObject: any): GetGmoEntryTranResult;
}