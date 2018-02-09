/**
 * 作品キャストout
 */
export declare class FilmCastResult {
    cstHyjjnNo: string;
    cstJmbtsNm: string;
    cstYkNm: string;
    cstShenFlg: string;
    cstJmbtsCd: string;
    /**
     * データ整形
     */
    static parse(resultObject: any): FilmCastResult;
}
