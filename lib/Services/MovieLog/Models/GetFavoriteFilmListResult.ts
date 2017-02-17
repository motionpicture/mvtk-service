import * as CommonUtil from '../../../Common/Util/Util';
import FilmResult from './FilmResult';

/**
 * 観たい作品検索out
 * @class
 */
export default class GetFavoriteFilmListResult {
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
    public skhnInfo: FilmResult[];
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {GetFavoriteFilmListResult} 観たい作品検索out
     */
    // tslint:disable-next-line:function-name
    public static parse(resultObject: any): GetFavoriteFilmListResult {
        const result = new GetFavoriteFilmListResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            if (normalizedName === 'skhnInfo') {
                const skhnInfos: FilmResult[] = [];

                if (property !== null && property.hasOwnProperty('SkhnInfo')) {
                    if (Array.isArray(property.SkhnInfo)) {
                        for (const info of property.SkhnInfo) {
                            skhnInfos.push(FilmResult.parse(info));
                        }
                    } else {
                        skhnInfos.push(FilmResult.parse(property.SkhnInfo));
                    }
                }

                result[normalizedName] = skhnInfos;
            } else {
                (<any>result)[normalizedName] = property;
            }
        });

        return result;
    };
}
