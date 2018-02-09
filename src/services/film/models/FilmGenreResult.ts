import { Util } from '../../../common/util/Util';

/**
 * 作品ジャンルout
 */
export class FilmGenreResult {
    public gnrTyp: string; // ジャンル区分
    public gnrKbnNm: string; // ジャンル区分名称
    /**
     * データ整形
     */
    // tslint:disable-next-line:function-name
    public static parse(resultObject: any): FilmGenreResult {
        const result = new FilmGenreResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            (<any>result)[normalizedName] = property;
        });

        return result;
    }
}
