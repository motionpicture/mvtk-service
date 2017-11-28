import CommonUtil from '../../../common/util/Util';

/**
 * 特典コード確保out
 * @class
 */
export default class PreserveCodeResult {

    /**
     * 特典コード確保番号 (特典コード確保時に採番される一意な番号)
     */
    public tktncdkkhInfo: { TKTNCDKKH_NO: string }[];

    // tslint:disable-next-line:function-name
    public static parse(resultObject: any): PreserveCodeResult {
        const result = new PreserveCodeResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            if (normalizedName === 'tktncdkkhInfo') {
                const tktncdkkhInfoList: { TKTNCDKKH_NO: string }[] = [];
                if (property !== null && property.hasOwnProperty('TktncdkkhInfo')) {
                    if (Array.isArray(property.TktncdkkhInfo)) {
                        for (const tktncdkkhInfo of property.TktncdkkhInfo) {
                            tktncdkkhInfoList.push(tktncdkkhInfo);
                        }
                    } else {
                        tktncdkkhInfoList.push(property.TktncdkkhInfo);
                    }
                }

                result[normalizedName] = tktncdkkhInfoList;
            } else {
                (<any>result)[normalizedName] = property;
            }
        });

        return result;
    }
}
