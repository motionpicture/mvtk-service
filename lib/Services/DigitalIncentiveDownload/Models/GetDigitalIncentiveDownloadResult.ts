import CommonUtil from '../../../Common/Util/Util';

export default class GetDigitalIncentiveDownloadResult {
    /**
     * ダウンロードファイル名
     */
    public dwnlodflNm: string;
    /**
     * ダウンロードファイルバイナリデータ
     */
    public dwnlodflDt: string;

    public static parse(resultObject): GetDigitalIncentiveDownloadResult {
        let result = new GetDigitalIncentiveDownloadResult();

        for (let propertyName in resultObject) {
            let normalizedName = CommonUtil.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];

            result[normalizedName] = property;
        }

        return result;
    };
}
