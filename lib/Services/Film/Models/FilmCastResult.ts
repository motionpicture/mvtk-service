import CommonUtil from '../../../Common/Util/Util';

export default class FilmCastResult {
    public cstHyjjnNo: string; // キャスト表示順番号
    public cstJmbtsNm: string; // キャスト人物名称
    public cstYkNm: string; // キャスト役名称
    public cstShenFlg: string; // キャスト主演フラグ
    public cstJmbtsCd: string; // キャスト人物コード

    public static parse (resultObject): FilmCastResult {
        let result = new FilmCastResult();

        for (let propertyName in resultObject) {
            let normalizedName = CommonUtil.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];

            result[normalizedName] = property;
        }

        return result;
    }
}
