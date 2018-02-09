import { Util } from '../../../common/util/Util';

/**
 * 作品キャストout
 */
export class FilmCastResult {
    public cstHyjjnNo: string; // キャスト表示順番号
    public cstJmbtsNm: string; // キャスト人物名称
    public cstYkNm: string; // キャスト役名称
    public cstShenFlg: string; // キャスト主演フラグ
    public cstJmbtsCd: string; // キャスト人物コード
    /**
     * データ整形
     */
    // tslint:disable-next-line:function-name
    public static parse(resultObject: any): FilmCastResult {
        const result = new FilmCastResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            (<any>result)[normalizedName] = property;
        });

        return result;
    }
}
