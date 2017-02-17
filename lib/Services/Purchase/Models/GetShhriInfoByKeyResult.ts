import * as CommonUtil from '../../../Common/Util/Util';

/**
 * 支払先情報取得out
 * @class
 */
export default class GetShhriInfoByKeyResult {
    public azkrknshhritmngTyp: string; // 預り金支払タイミング区分
    public azkrknshhriskTyp: string; // 預り金支払先区分
    public hmbijthredmgndiknshhriskTyp: string; // 販売時3Dメガネ代金支払先区分

    // tslint:disable-next-line:function-name
    public static parse(resultObject: any): GetShhriInfoByKeyResult {
        const result = new GetShhriInfoByKeyResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            (<any>result)[normalizedName] = property;
        });
        return result;
    }
}
