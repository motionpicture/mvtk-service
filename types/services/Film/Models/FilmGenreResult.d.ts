export default class FilmGenreResult {
    gnrTyp: string;
    gnrKbnNm: string;
    static PARSE(resultObject: any): FilmGenreResult;
}