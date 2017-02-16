import Service from '../../Common/Service';
import GetFavoriteFilmListResult from './Models/GetFavoriteFilmListResult';
import GetUnusedTicketListResult from './Models/GetUnusedTicketListResult';
import ShyzmtcktInfoListResult from './Models/ShyzmtcktInfoListResult';
/**
 * MovieLogService
 * @class
 * @extends {Service}
 */
export default class MovieLogService extends Service {
    /**
     * 観たい作品検索
     *
     * @param {string} kiinCd  会員コード
     * @param {number} rcdNum  レコード数
     * @param {number} shtkNum 取得件数
     * @param {string} dvcTyp  デバイス区分
     */
    getFavoriteFilmList(kiinCd: string, rcdNum: number, shtkNum: number, dvcTyp: string, cb: (err: any, resonse: any, getFavoriteFilmListResult: GetFavoriteFilmListResult) => void): void;
    /**
     * 未使用チケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    getUnusedTicketList(kiinCd: string, dvcTyp: string, cb: (err: any, resonse: any, getUnusedTicketListResult: GetUnusedTicketListResult) => void): void;
    /**
     * 座席予約済チケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    getSeatReservedTicketList(kiinCd: string, dvcTyp: string, cb: (err: any, resonse: any, shyzmtcktInfoListResult: ShyzmtcktInfoListResult) => void): void;
    /**
     * 鑑賞済チケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    getWatchedTicketList(kiinCd: string, dvcTyp: string, cb: (err: any, resonse: any, shyzmtcktInfoListResult: ShyzmtcktInfoListResult) => void): void;
    /**
     * ギフト贈呈済チケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    getGiftTicketList(kiinCd: string, dvcTyp: string, cb: (err: any, resonse: any, shyzmtcktInfoListResult: ShyzmtcktInfoListResult) => void): void;
    /**
     * 有効期限切れチケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    getExpiredTicketList(kiinCd: string, dvcTyp: string, cb: (err: any, resonse: any, shyzmtcktInfoListResult: ShyzmtcktInfoListResult) => void): void;
    /**
     * 観たい作品登録
     *
     * @param {string} skhnCd 作品コード
     */
    registerFavoriteFilm(skhnCd: string, cb: (err: any, resonse: any, isSuccess: boolean) => void): void;
    /**
     * 観たい作品削除
     *
     * @param {string} skhnCd 作品コード
     */
    deleteFavoriteFilm(skhnCd: string, cb: (err: any, resonse: any, isSuccess: boolean) => void): void;
    /**
     * 使用済チケット履歴削除
     *
     * @param {string} mvilgNo        ムビログ番号
     * @param {string} knytcktSttsKbn 購入チケットステータス区分
     * @param {Function} cb
     */
    deleteUsedTicketHistory(mvilgNo: string, knytcktSttsKbn: string, cb: Function): void;
    /**
     * 座席予約状況
     *
     * @param {string} mvilgNo ムビログ番号
     * @param {Function} cb
     */
    getSeatReservationStatusList(mvilgNo: string, cb: Function): void;
    /**
     * 鑑賞記録リスト検索
     *
     * @param {string} mvilgNo ムビログ番号
     * @param {Function} cb
     */
    getWatchRecordList(mvilgNo: string, cb: Function): void;
    /**
     * ギフト送信状況リスト検索
     *
     * @param {string} mvilgNo ムビログ番号
     * @param {Function} cb
     */
    getSentGiftStatusList(mvilgNo: string, cb: Function): void;
    /**
     * 電子券QRコード生成 (ムビログ用)
     *
     * @param {string} knyknrNo 購入管理番号
     */
    createQrCodeInMovieLog(knyknrNo: string, cb: (err: any, resonse: any, qrcdUrl: string) => void): void;
}
