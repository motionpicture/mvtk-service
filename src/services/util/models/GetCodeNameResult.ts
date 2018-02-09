import { Util } from '../../../common/util/Util';

export interface TypInfo {
    TYP: string;
    KBN_NM: string;
}

/**
 * GetCodeNameResult
 */
export class GetCodeNameResult {
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

    public static parse(resultObject: any): GetCodeNameResult {
        const result = new GetCodeNameResult();

        for (const propertyName in resultObject) {
            const normalizedName = Util.normalizePropertyName(propertyName);
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
        }

        return result;
    }
}
