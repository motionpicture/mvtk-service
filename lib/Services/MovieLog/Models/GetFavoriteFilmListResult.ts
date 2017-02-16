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

    public static PARSE(resultObject: any): GetFavoriteFilmListResult {
        const result = new GetFavoriteFilmListResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            if (normalizedName === 'skhnInfo') {
                const skhnInfos: FilmResult[] = [];

                if (property !== null && property.hasOwnProperty('SkhnInfo')) {
                    if (Array.isArray(property.SkhnInfo)) {
                        for (const info of property.SkhnInfo) {
                            skhnInfos.push(FilmResult.PARSE(info));
                        }
                    } else {
                        skhnInfos.push(FilmResult.PARSE(property.SkhnInfo));
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
