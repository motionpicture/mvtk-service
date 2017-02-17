/**
 * 作品詳細情報out
 * @class
 */
export default class FilmResult {
    /**
     * 作品コード
     */
    skhnCd: string;
    /**
     * 作品名称
     */
    skhnNm: string;
    /**
     * ポスター画像URL
     */
    pstrgzUrl: string;
    /**
     * 全国公開開始年月日
     */
    znkkkkikishYmd: string;
    /**
     * 全国公開時期記述
     */
    znkkkkijkDspt: string;
    /**
     * ＥＣサイト鑑賞券販売承認済フラグ
     */
    ecsthmbishnnzmFlg: string;
    /**
     * 鑑賞券販売開始日時(鑑賞券販売開始年月日＋鑑賞券販売開始時刻) YYYY-MM-DD hh:mm:ss
     */
    knshknhmbikishDt: string;
    /**
     * 鑑賞券販売終了年月日(YYYY/MM/DD)
     */
    knshknhmbishryYmd: string;
    /**
     * 観たい登録年月日(YYYY/MM/DD)
     */
    trkDt: string;
    /**
     * 感想ありフラグ
     */
    knsFlg: string;
    /**
     * 観たフラグ
     */
    mtaFlg: string;
    /**
     * 観たい登録者数
     */
    mtitrksyNum: string;
    /**
     * 観た登録者数
     */
    mtatrksyNum: string;
    /**
     * 購入ボタンフラグ
     */
    knyFlg: string;
    /**
     * 座席予約終了フラグ
     */
    zskyykshryFlg: string;
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {FilmResult} 作品詳細情報out
     */
    static parse(resultObject: any): FilmResult;
}
