import * as CommonUtil from '../../../Common/Util/Util';

/**
 * 作品キャストout
 * @class
 */
export default class FilmCastResult {
    public cstHyjjnNo: string; // キャスト表示順番号
    public cstJmbtsNm: string; // キャスト人物名称
    public cstYkNm: string; // キャスト役名称
    public cstShenFlg: string; // キャスト主演フラグ
    public cstJmbtsCd: string; // キャスト人物コード
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {FilmCastResult} 作品キャストout
     */
    // tslint:disable-next-line:function-name
    public static parse(resultObject: any): FilmCastResult {
        const result = new FilmCastResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            (<any>result)[normalizedName] = property;
        });

        return result;
    }
}
