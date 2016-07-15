import CommonUtil from '../../../Common/Util/Util';

export default class GetShhriInfoByKeyResult {
    public azkrknshhritmngTyp: string; // 預り金支払タイミング区分
    public azkrknshhriskTyp: string; // 預り金支払先区分
    public hmbijthredmgndiknshhriskTyp: string; // 販売時3Dメガネ代金支払先区分

    public static parse (resultObject): GetShhriInfoByKeyResult {
        let result = new GetShhriInfoByKeyResult();

        for (let propertyName in resultObject) {
            let normalizedName = CommonUtil.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];

            result[normalizedName] = property;
        }

        return result;
    }
}
