import CommonUtil from '../../../Common/Util/Util';

interface TypInfo {
    TYP: string;
    KBN_NM: string;
}

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
    public typInfo: Array<TypInfo>;


    public static parse (resultObject): GetCodeNameResult {
        let result = new GetCodeNameResult();

        for (let propertyName in resultObject) {
            let normalizedName = CommonUtil.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];

            if (normalizedName === 'typInfo') {
                let typInfos: Array<TypInfo> = [];

                if (property !== null && property.hasOwnProperty('TypInfo')) {
                    if (Array.isArray(property.TypInfo)) {
                        for (let info of property.TypInfo) {
                            typInfos.push(info);
                        }
                    } else {
                        typInfos.push(property.TypInfo);
                    }
                }

                result[normalizedName] = typInfos;
            } else {
                result[normalizedName] = property;
            }
        }

        return result;
    }
}
