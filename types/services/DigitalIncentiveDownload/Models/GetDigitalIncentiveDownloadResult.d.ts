export default class GetDigitalIncentiveDownloadResult {
    /**
     * ダウンロードファイル名
     */
    dwnlodflNm: string;
    /**
     * ダウンロードファイルバイナリデータ
     */
    dwnlodflDt: string;
    static parse(resultObject: any): GetDigitalIncentiveDownloadResult;
}
