/**
 * バナーリスト取得out
 */
export default class BnnrInfoResult {
    /**
     * デバイス区分
     */
    dvcTyp: string;
    /**
     * バナーコード
     */
    bnnrCd: string;
    /**
     * バナー名称
     */
    bnnrNm: string;
    /**
     * バナー表示箇所区分
     */
    bnnrhyjkshTyp: string;
    /**
     * バナー画像URL
     */
    bnnrgzUrl: string;
    /**
     * バナーリンク先URL
     */
    bnnrlnkskUrl: string;
    /**
     * バナー説明本文
     */
    bnnrstsmiTxt: string;
    /**
     * バナー掲載開始年月日
     */
    bnnrkisikishYmd: string;
    /**
     * バナー掲載終了年月日
     */
    bnnrkisishryYmd: string;
    static PARSE(resultObject: any): BnnrInfoResult;
}
