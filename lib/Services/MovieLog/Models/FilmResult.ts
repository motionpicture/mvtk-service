import * as CommonUtil from '../../../Common/Util/Util';

/**
 * 作品詳細情報out
 * @class
 */
export default class FilmResult {
    /**
     * 作品コード
     */
    public skhnCd: string;
    /**
     * 作品名称
     */
    public skhnNm: string;
    /**
     * ポスター画像URL
     */
    public pstrgzUrl: string;
    /**
     * 全国公開開始年月日
     */
    public znkkkkikishYmd: string;
    /**
     * 全国公開時期記述
     */
    public znkkkkijkDspt: string;
    /**
     * ＥＣサイト鑑賞券販売承認済フラグ
     */
    public ecsthmbishnnzmFlg: string;
    /**
     * 鑑賞券販売開始日時(鑑賞券販売開始年月日＋鑑賞券販売開始時刻) YYYY-MM-DD hh:mm:ss
     */
    public knshknhmbikishDt: string;
    /**
     * 鑑賞券販売終了年月日(YYYY/MM/DD)
     */
    public knshknhmbishryYmd: string;
    /**
     * 観たい登録年月日(YYYY/MM/DD)
     */
    public trkDt: string;
    /**
     * 感想ありフラグ
     */
    public knsFlg: string;
    /**
     * 観たフラグ
     */
    public mtaFlg: string;
    /**
     * 観たい登録者数
     */
    public mtitrksyNum: string;
    /**
     * 観た登録者数
     */
    public mtatrksyNum: string;
    /**
     * 購入ボタンフラグ
     */
    public knyFlg: string;
    /**
     * 座席予約終了フラグ
     */
    public zskyykshryFlg: string;
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {FilmResult} 作品詳細情報out
     */
    // tslint:disable-next-line:function-name
    public static parse(resultObject: any): FilmResult {
        const result = new FilmResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            (<any>result)[normalizedName] = property;
        });

        return result;
    };
}
