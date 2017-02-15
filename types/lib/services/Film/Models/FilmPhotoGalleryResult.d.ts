/**
 * 作品画像
 * @class
 */
export default class FilmPhotoGalleryResult {
    gzNo: string;
    gzflUrl: string;
    static PARSE(resultObject: any): FilmPhotoGalleryResult;
}
