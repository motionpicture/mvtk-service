import Service from '../../common/Service';
import GetFavoriteFilmListResult from './Models/GetFavoriteFilmListResult';
import GetUnusedTicketListResult from './Models/GetUnusedTicketListResult';
import ShyzmtcktInfoListResult from './Models/ShyzmtcktInfoListResult';
export default class MovieLogService extends Service {
    /**
     * 観たい作品検索
     *
     * @param {string} kiinCd  会員コード
     * @param {number} rcdNum  レコード数
     * @param {number} shtkNum 取得件数
     * @param {string} dvcTyp  デバイス区分
     */
    getFavoriteFilmList(kiinCd: any, rcdNum: any, shtkNum: any, dvcTyp: any, cb: (err, response, getFavoriteFilmListResult: GetFavoriteFilmListResult) => void): void;
    /**
     * 未使用チケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    getUnusedTicketList(kiinCd: any, dvcTyp: any, cb: (err, response, getUnusedTicketListResult: GetUnusedTicketListResult) => void): void;
    /**
     * 座席予約済チケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    getSeatReservedTicketList(kiinCd: any, dvcTyp: any, cb: (err, response, shyzmtcktInfoListResult: ShyzmtcktInfoListResult) => void): void;
    /**
     * 鑑賞済チケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    getWatchedTicketList(kiinCd: any, dvcTyp: any, cb: (err, response, shyzmtcktInfoListResult: ShyzmtcktInfoListResult) => void): void;
    /**
     * ギフト贈呈済チケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    getGiftTicketList(kiinCd: any, dvcTyp: any, cb: (err, response, shyzmtcktInfoListResult: ShyzmtcktInfoListResult) => void): void;
    /**
     * 有効期限切れチケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    getExpiredTicketList(kiinCd: any, dvcTyp: any, cb: (err, response, shyzmtcktInfoListResult: ShyzmtcktInfoListResult) => void): void;
    /**
     * 観たい作品登録
     *
     * @param {string} skhnCd 作品コード
     */
    registerFavoriteFilm(skhnCd: string, cb: (err, response, isSuccess: boolean) => void): void;
    /**
     * 観たい作品削除
     *
     * @param {string} skhnCd 作品コード
     */
    deleteFavoriteFilm(skhnCd: string, cb: (err, response, isSuccess: boolean) => void): void;
    /**
     * 作品感想検索
     *
     * @param skhnCd  作品コード
     * @param kiinCd  会員コード
     * @param rcdNum  レコード数
     * @param shtkNum 取得件数
     */
    getFilmReviewList(skhnCd: any, kiinCd: any, rcdNum: any, shtkNum: any, cb: Function): void;
    /**
     * 使用済チケット履歴削除
     *
     * @param {string} mvilgNo        ムビログ番号
     * @param {string} knytcktSttsKbn 購入チケットステータス区分
     */
    deleteUsedTicketHistory(mvilgNo: any, knytcktSttsKbn: any, cb: Function): void;
    /**
     * 座席予約状況
     *
     * @param {string} mvilgNo ムビログ番号
     */
    getSeatReservationStatusList(mvilgNo: any, cb: Function): void;
    /**
     * 鑑賞記録リスト検索
     *
     * @param {string} mvilgNo ムビログ番号
     */
    getWatchRecordList(mvilgNo: any, cb: Function): void;
    /**
     * ギフト送信状況リスト検索
     *
     * @param {string} mvilgNo ムビログ番号
     */
    getSentGiftStatusList(mvilgNo: any, cb: Function): void;
    /**
     * 電子券QRコード生成 (ムビログ用)
     *
     * @param {string} knyknrNo 購入管理番号
     */
    createQrCodeInMovieLog(knyknrNo: any, cb: (err, response, qrcdUrl: string) => void): void;
}
