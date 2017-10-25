import CommonUtil from '../../../common/util/Util';

/**
 * 作品画像out
 * @class
 */
export default class FilmPhotoGalleryResult {
    public gzNo: string; // 画像番号
    public gzflUrl: string; // 画像ファイルURL
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {FilmPhotoGalleryResult} 作品画像out
     */
    // tslint:disable-next-line:function-name
    public static parse(resultObject: any): FilmPhotoGalleryResult {
        const result = new FilmPhotoGalleryResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            (<any>result)[normalizedName] = property;
        });

        return result;
    }
}
