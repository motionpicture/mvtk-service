/**
 * デジタルインセンティブダウンロードout
 */
export default class GetDigitalIncentiveDownloadResult {
    /**
     * ダウンロードファイル名
     */
    dwnlodflNm: string;
    /**
     * ダウンロードファイルバイナリデータ
     */
    dwnlodflDt: string;
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {GetDigitalIncentiveDownloadResult} デジタルインセンティブダウンロードout
     */
    static parse(resultObject: any): GetDigitalIncentiveDownloadResult;
}
