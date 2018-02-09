/**
 * 作品ジャンルout
 */
export declare class FilmGenreResult {
    gnrTyp: string;
    gnrKbnNm: string;
    /**
     * データ整形
     */
    static parse(resultObject: any): FilmGenreResult;
}
