
import { Util } from '../../../common/util/Util';

/**
 * SkhnInfo
 */
export class SkhnInfo {
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

    public static parse(resultObject: any): SkhnInfo {
        const result = new SkhnInfo();

        for (const propertyName in resultObject) {
            const normalizedName = Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            (<any>result)[normalizedName] = property;
        }

        return result;
    }
}

/**
 * GetFavoriteFilmListResult
 */
export class GetFavoriteFilmListResult {
    /**
     * 会員コード
     */
    public kiinCd: string;
    /**
     * レコード数
     */
    public rcdNum: string;
    /**
     * 作品詳細情報(itemArray)
     */
    public skhnInfo: SkhnInfo[];

    public static parse(resultObject: any): GetFavoriteFilmListResult {
        const result = new GetFavoriteFilmListResult();

        for (const propertyName in resultObject) {
            const normalizedName = Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            if (normalizedName === 'skhnInfo') {
                const skhnInfos: SkhnInfo[] = [];

                if (property !== null && property.hasOwnProperty('SkhnInfo')) {
                    if (Array.isArray(property.SkhnInfo)) {
                        for (const info of property.SkhnInfo) {
                            skhnInfos.push(SkhnInfo.parse(info));
                        }
                    } else {
                        skhnInfos.push(SkhnInfo.parse(property.SkhnInfo));
                    }
                }

                result[normalizedName] = skhnInfos;
            } else {
                (<any>result)[normalizedName] = property;
            }
        }

        return result;
    }
}
