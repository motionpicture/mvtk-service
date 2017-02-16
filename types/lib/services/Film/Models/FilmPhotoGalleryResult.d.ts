/**
 * 作品画像out
 * @class
 */
export default class FilmPhotoGalleryResult {
    gzNo: string;
    gzflUrl: string;
    static PARSE(resultObject: any): FilmPhotoGalleryResult;
}
