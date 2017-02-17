import * as CommonUtil from '../../../Common/Util/Util';

/**
 * デジタルインセンティブダウンロードout
 */
export default class GetDigitalIncentiveDownloadResult {
    /**
     * ダウンロードファイル名
     */
    public dwnlodflNm: string;
    /**
     * ダウンロードファイルバイナリデータ
     */
    public dwnlodflDt: string;
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {GetDigitalIncentiveDownloadResult} デジタルインセンティブダウンロードout
     */
    // tslint:disable-next-line:function-name
    public static parse(resultObject: any): GetDigitalIncentiveDownloadResult {
        const result = new GetDigitalIncentiveDownloadResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            (<any>result)[normalizedName] = property;
        });

        return result;
    };
}
