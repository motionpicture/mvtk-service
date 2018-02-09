
import { Util } from '../../../common/util/Util';

/**
 * GetDigitalIncentiveDownloadResult
 */
export class GetDigitalIncentiveDownloadResult {
    /**
     * ダウンロードファイル名
     */
    public dwnlodflNm: string;
    /**
     * ダウンロードファイルバイナリデータ
     */
    public dwnlodflDt: string;

    public static parse(resultObject: any): GetDigitalIncentiveDownloadResult {
        const result = new GetDigitalIncentiveDownloadResult();

        for (const propertyName in resultObject) {
            const normalizedName = Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            (<any>result)[normalizedName] = property;
        }

        return result;
    }
}
