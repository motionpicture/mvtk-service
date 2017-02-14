export default class FilmGenreResult {
    gnrTyp: string;
    gnrKbnNm: string;
    static parse(resultObject: any): FilmGenreResult;
}
