/**
 * 作品キャストout
 * @class
 */
export default class FilmCastResult {
    cstHyjjnNo: string;
    cstJmbtsNm: string;
    cstYkNm: string;
    cstShenFlg: string;
    cstJmbtsCd: string;
    static PARSE(resultObject: any): FilmCastResult;
}
