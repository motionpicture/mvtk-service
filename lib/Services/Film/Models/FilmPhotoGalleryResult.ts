import * as CommonUtil from '../../../Common/Util/Util';

/**
 * 作品画像
 * @class
 */
export default class FilmPhotoGalleryResult {
    public gzNo: string; // 画像番号
    public gzflUrl: string; // 画像ファイルURL

    public static PARSE(resultObject: any): FilmPhotoGalleryResult {
        const result: any = new FilmPhotoGalleryResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            result[normalizedName] = property;
        });

        return result;
    }
}
