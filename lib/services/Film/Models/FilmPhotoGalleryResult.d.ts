/**
 * 作品画像out
 */
export declare class FilmPhotoGalleryResult {
    gzNo: string;
    gzflUrl: string;
    /**
     * データ整形
     */
    static parse(resultObject: any): FilmPhotoGalleryResult;
}
