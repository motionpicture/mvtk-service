import CommonUtil from '../../../Common/Util/Util';

export default class FilmGenreResult {
    public gnrTyp: string; // ジャンル区分
    public gnrKbnNm: string; // ジャンル区分名称

    public static parse (resultObject): FilmGenreResult {
        let result = new FilmGenreResult();

        for (let propertyName in resultObject) {
            let normalizedName = CommonUtil.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];

            result[normalizedName] = property;
        }

        return result;
    }
}
