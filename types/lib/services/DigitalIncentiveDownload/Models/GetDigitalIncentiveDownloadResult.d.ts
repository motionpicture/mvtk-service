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
    static PARSE(resultObject: any): GetDigitalIncentiveDownloadResult;
}
