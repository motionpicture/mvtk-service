import CommonUtil from '../../../Common/Util/Util';
import FilmUtilities from '../FilmUtilities';

export default class GetTrailerDetailResult {
    public skhnCd: string; // 作品コード
    public ykkhnInfo: Array<YkkhnInfo>; // 予告編情報

    public static parse (resultObject): GetTrailerDetailResult {
        let result = new GetTrailerDetailResult();

        for (let propertyName in resultObject) {
            let normalizedName = CommonUtil.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];

            if (normalizedName === 'ykkhnInfo') {
                let ykkhnInfos: Array<YkkhnInfo> = [];

                if (property !== null && property.hasOwnProperty('YkkhnInfo')) {
                    if (Array.isArray(property.YkkhnInfo)) {
                        for (let info of property.YkkhnInfo) {
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
        }

        return result;
    };
}

interface YkkhnInfo {
    YKKHN_NO: string;
    DVC_TYP: string;
    YKKHN_TTL: string;
    YKKHN_URL: string;
}