import * as CommonUtil from '../../../Common/Util/Util';
import ShyzmtcktInfoResult from './ShyzmtcktInfoResult';

/**
 * 座席予約済チケット検索
 * @class
 */
export default class ShyzmtcktInfoListResult {
    public kiinCd: string = ''; // 会員コード
    public shyzmtcktInfo: ShyzmtcktInfoResult[] | null = null; // 作品詳細情報(itemArray)

    public static PARSE(resultObject: any): ShyzmtcktInfoListResult {
        const result = new ShyzmtcktInfoListResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            if (normalizedName === 'shyzmtcktInfo') {
                const infos: ShyzmtcktInfoResult[] = [];

                if (property !== null && property.hasOwnProperty('ShyzmtcktInfo')) {
                    if (Array.isArray(property.ShyzmtcktInfo)) {
                        for (const info of property.ShyzmtcktInfo) {
                            infos.push(ShyzmtcktInfoResult.PARSE(info));
                        }
                    } else {
                        infos.push(ShyzmtcktInfoResult.PARSE(property.ShyzmtcktInfo));
                    }
                }

                result[normalizedName] = infos;
            } else {
                (<any>result)[normalizedName] = property;
            }
        });

        return result;
    };
}
