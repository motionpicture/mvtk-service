/**
 * 作品スタッフout
 * @class
 */
export default class FilmStaffResult {
    stffHyjjnNo: string;
    stffJmbtsNm: string;
    stffYkwrNm: string;
    stffJmbtsCd: string;
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {FilmStaffResult} 作品スタッフout
     */
    static parse(resultObject: any): FilmStaffResult;
}
