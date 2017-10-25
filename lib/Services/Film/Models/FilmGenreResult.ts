import CommonUtil from '../../../common/util/Util';

/**
 * 作品ジャンルout
 * @class
 */
export default class FilmGenreResult {
    public gnrTyp: string; // ジャンル区分
    public gnrKbnNm: string; // ジャンル区分名称
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {FilmGenreResult} 作品ジャンルout
     */
    // tslint:disable-next-line:function-name
    public static parse(resultObject: any): FilmGenreResult {
        const result = new FilmGenreResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            (<any>result)[normalizedName] = property;
        });

        return result;
    }
}
