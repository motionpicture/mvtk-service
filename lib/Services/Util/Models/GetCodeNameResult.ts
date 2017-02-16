import * as CommonUtil from '../../../Common/Util/Util';

/**
 * 区分情報
 * @interface
 */
export interface TypInfo {
    TYP: string;
    KBN_NM: string;
}

/**
 * 各種コード検索out
 * @class
 */
export default class GetCodeNameResult {
    /**
     * 項目区分
     */
    public kmkTyp: string;
    /**
     * 項目区分名称
     */
    public kmkkbnNm: string;
    /**
     * 選択区分
     */
    public slcttyp: string;
    /**
     * 区分情報(itemArray)
     */
    public typInfo: TypInfo[];

    public static PARSE(resultObject: any): GetCodeNameResult {
        const result = new GetCodeNameResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            if (normalizedName === 'typInfo') {
                const typInfos: TypInfo[] = [];

                if (property !== null && property.hasOwnProperty('TypInfo')) {
                    if (Array.isArray(property.TypInfo)) {
                        for (const info of property.TypInfo) {
                            typInfos.push(info);
                        }
                    } else {
                        typInfos.push(property.TypInfo);
                    }
                }

                result[normalizedName] = typInfos;
            } else {
                (<any>result)[normalizedName] = property;
            }
        });

        return result;
    }
}
