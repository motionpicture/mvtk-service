import { Util } from '../../../common/util/Util';

/**
 * GetShhriInfoByKeyResult
 */
export class GetShhriInfoByKeyResult {
    public azkrknshhritmngTyp: string; // 預り金支払タイミング区分
    public azkrknshhriskTyp: string; // 預り金支払先区分
    public hmbijthredmgndiknshhriskTyp: string; // 販売時3Dメガネ代金支払先区分

    public static parse(resultObject: any): GetShhriInfoByKeyResult {
        const result = new GetShhriInfoByKeyResult();

        for (const propertyName in resultObject) {
            const normalizedName = Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            (<any>result)[normalizedName] = property;
        }

        return result;
    }
}
