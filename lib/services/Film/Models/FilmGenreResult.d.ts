/**
 * 作品ジャンルout
 * @class
 */
export default class FilmGenreResult {
    gnrTyp: string;
    gnrKbnNm: string;
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {FilmGenreResult} 作品ジャンルout
     */
    static parse(resultObject: any): FilmGenreResult;
}
