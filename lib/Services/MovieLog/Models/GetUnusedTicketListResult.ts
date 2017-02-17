import * as CommonUtil from '../../../Common/Util/Util';
import TicktResult from './TicktResult';

/**
 * 未使用チケット検索out
 * @class
 */
export default class GetUnusedTicketListResult {
    public kiinCd: string; // 会員コード
    public mshyticktInfo: TicktResult[]; // 作品詳細情報(itemArray)
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {GetUnusedTicketListResult} 未使用チケット検索out
     */
    // tslint:disable-next-line:function-name
    public static parse(resultObject: any): GetUnusedTicketListResult {
        const result = new GetUnusedTicketListResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            if (normalizedName === 'mshyticktInfo') {
                const infos: TicktResult[] = [];

                if (property !== null && property.hasOwnProperty('MshyticktInfo')) {
                    if (Array.isArray(property.MshyticktInfo)) {
                        for (const info of property.MshyticktInfo) {
                            infos.push(TicktResult.PARSE(info));
                        }
                    } else {
                        infos.push(TicktResult.PARSE(property.MshyticktInfo));
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
