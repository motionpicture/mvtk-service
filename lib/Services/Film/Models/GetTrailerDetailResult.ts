import * as CommonUtil from '../../../Common/Util/Util';

/**
 * 予告編取得
 * @class
 */
export default class GetTrailerDetailResult {
    public skhnCd: string; // 作品コード
    public ykkhnInfo: YkkhnInfo[]; // 予告編情報

    public static PARSE(resultObject: any): GetTrailerDetailResult {
        const result: any = new GetTrailerDetailResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
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
                result[normalizedName] = property;
            }
        });

        return result;
    };
}

/**
 * YkkhnInfo
 * @interface
 */
export interface YkkhnInfo {
    YKKHN_NO: string;
    DVC_TYP: string;
    YKKHN_TTL: string;
    YKKHN_URL: string;
}