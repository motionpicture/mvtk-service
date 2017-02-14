export default class FilmCastResult {
    cstHyjjnNo: string;
    cstJmbtsNm: string;
    cstYkNm: string;
    cstShenFlg: string;
    cstJmbtsCd: string;
    static parse(resultObject: any): FilmCastResult;
}
