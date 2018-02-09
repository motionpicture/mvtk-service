import { Util } from '../../../common/util/Util';

/**
 * 予告編取得out
 */
export class GetTrailerDetailResult {
    public skhnCd: string; // 作品コード
    public ykkhnInfo: YkkhnInfo[]; // 予告編情報
    /**
     * データ整形
     */
    // tslint:disable-next-line:function-name
    public static parse(resultObject: any): GetTrailerDetailResult {
        const result = new GetTrailerDetailResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            if (normalizedName === 'ykkhnInfo') {
                const ykkhnInfos: YkkhnInfo[] = [];

                if (property !== null && property.hasOwnProperty('YkkhnInfo')) {
                    if (Array.isArray(property.YkkhnInfo)) {
                        for (const info of property.YkkhnInfo) {
                            ykkhnInfos.push(info);
                        }
                    } else {
                        ykkhnInfos.push(property.YkkhnInfo);
                    }
                }

                result[normalizedName] = ykkhnInfos;
            } else {
                (<any>result)[normalizedName] = property;
            }
        });

        return result;
    }
}

/**
 * YkkhnInfo
 */
export interface YkkhnInfo {
    YKKHN_NO: string;
    DVC_TYP: string;
    YKKHN_TTL: string;
    YKKHN_URL: string;
}
