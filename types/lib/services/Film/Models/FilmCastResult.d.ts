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
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {FilmCastResult} 作品キャストout
     */
    static parse(resultObject: any): FilmCastResult;
}
