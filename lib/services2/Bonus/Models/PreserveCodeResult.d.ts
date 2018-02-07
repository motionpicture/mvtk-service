/**
 * 特典コード確保out
 * @class
 */
export default class PreserveCodeResult {
    /**
     * 特典コード情報
     */
    tktncdkkhInfo: {
        /**
         * 特典コード確保番号 (特典コード確保時に採番される一意な番号)
         */
        TKTNCDKKH_NO: string;
    }[];
    /**
     * 特典在庫状況メッセージ本文 (在庫僅少、在庫切れ時表示メッセージ（HTMLタグを含む）)
     */
    tktnzikjkymsgTxt: string[];
    static parse(resultObject: any): PreserveCodeResult;
}
