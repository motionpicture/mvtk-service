/**
 * 作品スタッフout
 */
export declare class FilmStaffResult {
    stffHyjjnNo: string;
    stffJmbtsNm: string;
    stffYkwrNm: string;
    stffJmbtsCd: string;
    /**
     * データ整形
     */
    static parse(resultObject: any): FilmStaffResult;
}
