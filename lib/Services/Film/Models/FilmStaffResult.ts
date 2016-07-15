import CommonUtil from '../../../Common/Util/Util';

export default class FilmStaffResult {
    public stffHyjjnNo: string; // スタッフ表示順番号
    public stffJmbtsNm: string; // スタッフ人物名称
    public stffYkwrNm: string; // スタッフ役割名称
    public stffJmbtsCd: string; // スタッフ人物コード

    public static parse (resultObject): FilmStaffResult {
        let result = new FilmStaffResult();

        for (let propertyName in resultObject) {
            let normalizedName = CommonUtil.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];

            result[normalizedName] = property;
        }

        return result;
    }
}
