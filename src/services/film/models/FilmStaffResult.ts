import { Util } from '../../../common/util/Util';

/**
 * 作品スタッフout
 */
export class FilmStaffResult {
    public stffHyjjnNo: string; // スタッフ表示順番号
    public stffJmbtsNm: string; // スタッフ人物名称
    public stffYkwrNm: string; // スタッフ役割名称
    public stffJmbtsCd: string; // スタッフ人物コード
    /**
     * データ整形
     */
    // tslint:disable-next-line:function-name
    public static parse(resultObject: any): FilmStaffResult {
        const result = new FilmStaffResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            (<any>result)[normalizedName] = property;
        });

        return result;
    }
}
