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
    static PARSE(resultObject: any): GetFavoriteFilmListResult;
}
