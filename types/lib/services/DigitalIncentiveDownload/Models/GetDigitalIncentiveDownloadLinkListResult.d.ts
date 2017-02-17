/**
 * デジタルインセンティブ情報
 * @interface DgtlincntvInfo
 */
export interface DgtlincntvInfo {
    /**
     * デジタルインセンティブコード
     */
    DGTLINCNTV_CD: string;
    /**
     * デジタルインセンティブタイトル
     */
    DGTLINCNTV_TTL: string;
    /**
     * デジタルインセンティブ説明本文
     */
    DGTLINCNTVSTSMI_TXT: string;
    /**
     * サンプル画像URL
     */
    SMPLGZ_URL: string;
    /**
     * デジタルインセンティブ購入開始年月日
     */
    DGTLINCNTVKNYKISH_YMD: string;
    /**
     * デジタルインセンティブ購入終了年月日
     */
    DGTLINCNTVKNYSHRY_YMD: string;
    /**
     * デジタルインセンティブダウンロード有効期間
     */
    DGTLINCNTVDWNLODYK_TM: string;
    /**
     * デジタルインセンティブダウンロード上限回数
     */
    DGTLINCNTVDWNLODJGNKI_NUM: string;
    /**
     * 作品デジタルインセンティブ備考
     */
    SKHNDGTLINCNTV_RMK: string;
    /**
     * ダウンロード回数
     */
    DWNLODKI_NUM: string;
    /**
     * デジタルインセンティブ詳細情報 （itemArray）
     */
    DGTLINCNTVSHSI_INFO: {
        DgtlincntvshsiInfo: DgtlincntvshsiInfo[];
    };
}
/**
 * DgtlincntvshsiInfo
 * @interface DgtlincntvshsiInfo
 */
export interface DgtlincntvshsiInfo {
    /**
     * デジタルインセンティブ枝番号
     */
    DGTLINCNTVED_NO: string;
    /**
     * デジタルインセンティブ詳細タイトル
     */
    DGTLINCNTVSHSI_TTL: string;
}
/**
 * デジタルインセンティブダウンロード情報検索out
 */
export default class GetDigitalIncentiveDownloadLinkListResult {
    /**
     * デバイス区分
     */
    dvcTyp: string;
    /**
     * 購入管理番号
     */
    knyknrNo: string;
    /**
     * デジタルインセンティブ情報（itemArray）
     */
    dgtlincntvInfo: DgtlincntvInfo[];
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {GetDigitalIncentiveDownloadLinkListResult} デジタルインセンティブダウンロード情報検索out
     */
    static parse(resultObject: any): GetDigitalIncentiveDownloadLinkListResult;
}
