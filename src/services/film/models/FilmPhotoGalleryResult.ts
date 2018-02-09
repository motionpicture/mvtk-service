import { Util } from '../../../common/util/Util';

/**
 * 作品画像out
 */
export class FilmPhotoGalleryResult {
    public gzNo: string; // 画像番号
    public gzflUrl: string; // 画像ファイルURL
    /**
     * データ整形
     */
    // tslint:disable-next-line:function-name
    public static parse(resultObject: any): FilmPhotoGalleryResult {
        const result = new FilmPhotoGalleryResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            (<any>result)[normalizedName] = property;
        });

        return result;
    }
}
