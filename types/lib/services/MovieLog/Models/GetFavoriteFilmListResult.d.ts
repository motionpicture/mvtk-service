import FilmResult from './FilmResult';
/**
 * 観たい作品検索out
 * @class
 */
export default class GetFavoriteFilmListResult {
    /**
     * 会員コード
     */
    kiinCd: string;
    /**
     * レコード数
     */
    rcdNum: string;
    /**
     * 作品詳細情報(itemArray)
     */
    skhnInfo: FilmResult[];
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {GetFavoriteFilmListResult} 観たい作品検索out
     */
    static parse(resultObject: any): GetFavoriteFilmListResult;
}
