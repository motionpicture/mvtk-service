import CommonUtil from '../../../common/util/Util';

export default class FilmPhotoGalleryResult {
    public gzNo: string; // 画像番号
    public gzflUrl: string; // 画像ファイルURL

    public static parse (resultObject): FilmPhotoGalleryResult {
        let result = new FilmPhotoGalleryResult();

        for (let propertyName in resultObject) {
            let normalizedName = CommonUtil.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];

            result[normalizedName] = property;
        }

        return result;
    }
}
