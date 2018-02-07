import Service from '../../common/Service';
import GetFavoriteFilmListResult from './Models/GetFavoriteFilmListResult';
import GetUnusedTicketListResult from './Models/GetUnusedTicketListResult';
import ShyzmtcktInfoListResult from './Models/ShyzmtcktInfoListResult';
import WatchRecordResult from './Models/WatchRecordResult';
import SeatReservationStatusListResult from './Models/SeatReservationStatusListResult';
import SentGiftStatusListResult from './Models/SentGiftStatusListResult';
export default class MovieLogService extends Service {
    /**
     * 観たい作品検索
     *
     * @param {string} kiinCd  会員コード
     * @param {number} rcdNum  レコード数
     * @param {number} shtkNum 取得件数
     * @param {string} dvcTyp  デバイス区分
     */
    getFavoriteFilmList(kiinCd: any, rcdNum: any, shtkNum: any, dvcTyp: any): Promise<{
        response: any;
        result: GetFavoriteFilmListResult;
    }>;
    /**
     * 未使用チケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    getUnusedTicketList(kiinCd: any, dvcTyp: any): Promise<{
        response: any;
        result: GetUnusedTicketListResult;
    }>;
    /**
     * 座席予約済チケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    getSeatReservedTicketList(kiinCd: any, dvcTyp: any): Promise<{
        response: any;
        result: ShyzmtcktInfoListResult;
    }>;
    /**
     * 鑑賞済チケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    getWatchedTicketList(kiinCd: any, dvcTyp: any): Promise<{
        response: any;
        result: ShyzmtcktInfoListResult;
    }>;
    /**
     * ギフト贈呈済チケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    getGiftTicketList(kiinCd: any, dvcTyp: any): Promise<{
        response: any;
        result: ShyzmtcktInfoListResult;
    }>;
    /**
     * 有効期限切れチケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    getExpiredTicketList(kiinCd: any, dvcTyp: any): Promise<{
        response: any;
        result: ShyzmtcktInfoListResult;
    }>;
    /**
     * 観たい作品登録
     *
     * @param {string} skhnCd 作品コード
     */
    registerFavoriteFilm(skhnCd: string): Promise<{
        response: any;
        result: boolean;
    }>;
    /**
     * 観たい作品削除
     *
     * @param {string} skhnCd 作品コード
     */
    deleteFavoriteFilm(skhnCd: string): Promise<{
        response: any;
        result: boolean;
    }>;
    /**
     * 作品感想検索
     *
     * @param skhnCd  作品コード
     * @param kiinCd  会員コード
     * @param rcdNum  レコード数
     * @param shtkNum 取得件数
     */
    getFilmReviewList(skhnCd: any, kiinCd: any, rcdNum: any, shtkNum: any): void;
    /**
     * 使用済チケット履歴削除
     *
     * @param {string} mvilgNo        ムビログ番号
     * @param {string} knytcktSttsKbn 購入チケットステータス区分
     */
    deleteUsedTicketHistory(mvilgNo: any, knytcktSttsKbn: any): Promise<{
        response: any;
        result: boolean;
    }>;
    /**
     * 座席予約状況
     *
     * @param {string} mvilgNo ムビログ番号
     */
    getSeatReservationStatusList(mvilgNo: any): Promise<{
        response: any;
        result: SeatReservationStatusListResult[];
    }>;
    /**
     * 鑑賞記録リスト検索
     *
     * @param {string} mvilgNo ムビログ番号
     */
    getWatchRecordList(mvilgNo: any): Promise<{
        response: any;
        result: WatchRecordResult[];
    }>;
    /**
     * ギフト送信状況リスト検索
     *
     * @param {string} mvilgNo ムビログ番号
     */
    getSentGiftStatusList(mvilgNo: any): Promise<{
        response: any;
        result: SentGiftStatusListResult[];
    }>;
    /**
     * 電子券QRコード生成 (ムビログ用)
     *
     * @param {string} knyknrNo 購入管理番号
     */
    createQrCodeInMovieLog(knyknrNo: any): Promise<{
        response: any;
        result: string;
    }>;
}
