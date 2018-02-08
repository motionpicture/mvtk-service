/**
 * 作品画像out
 * @class
 */
export default class FilmPhotoGalleryResult {
    gzNo: string;
    gzflUrl: string;
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {FilmPhotoGalleryResult} 作品画像out
     */
    static parse(resultObject: any): FilmPhotoGalleryResult;
}
