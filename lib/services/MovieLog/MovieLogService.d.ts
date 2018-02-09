import { Service } from '../../common/Service';
import { GetFavoriteFilmListResult } from './models/GetFavoriteFilmListResult';
import { GetUnusedTicketListResult } from './models/GetUnusedTicketListResult';
import { SeatReservationStatusListResult } from './models/SeatReservationStatusListResult';
import { SentGiftStatusListResult } from './models/SentGiftStatusListResult';
import { ShyzmtcktInfoListResult } from './models/ShyzmtcktInfoListResult';
import { WatchRecordResult } from './models/WatchRecordResult';
/**
 * MovieLogService
 */
export declare class MovieLogService extends Service {
    /**
     * 観たい作品検索
     *
     * @param kiinCd  会員コード
     * @param rcdNum  レコード数
     * @param shtkNum 取得件数
     * @param dvcTyp  デバイス区分
     */
    getFavoriteFilmList(kiinCd: string, rcdNum: string, shtkNum: string, dvcTyp: string): Promise<{
        response: any;
        result: GetFavoriteFilmListResult;
    }>;
    /**
     * 未使用チケット検索
     *
     * @param kiinCd 会員コード
     * @param dvcTyp デバイス区分
     */
    getUnusedTicketList(kiinCd: string, dvcTyp: string): Promise<{
        response: any;
        result: GetUnusedTicketListResult;
    }>;
    /**
     * 座席予約済チケット検索
     *
     * @param kiinCd 会員コード
     * @param dvcTyp デバイス区分
     */
    getSeatReservedTicketList(kiinCd: string, dvcTyp: string): Promise<{
        response: any;
        result: ShyzmtcktInfoListResult;
    }>;
    /**
     * 鑑賞済チケット検索
     *
     * @param kiinCd 会員コード
     * @param dvcTyp デバイス区分
     */
    getWatchedTicketList(kiinCd: string, dvcTyp: string): Promise<{
        response: any;
        result: ShyzmtcktInfoListResult;
    }>;
    /**
     * ギフト贈呈済チケット検索
     *
     * @param kiinCd 会員コード
     * @param dvcTyp デバイス区分
     */
    getGiftTicketList(kiinCd: string, dvcTyp: string): Promise<{
        response: any;
        result: ShyzmtcktInfoListResult;
    }>;
    /**
     * 有効期限切れチケット検索
     *
     * @param kiinCd 会員コード
     * @param dvcTyp デバイス区分
     */
    getExpiredTicketList(kiinCd: string, dvcTyp: string): Promise<{
        response: any;
        result: ShyzmtcktInfoListResult;
    }>;
    /**
     * 観たい作品登録
     *
     * @param skhnCd 作品コード
     */
    registerFavoriteFilm(skhnCd: string): Promise<{
        response: any;
        result: boolean;
    }>;
    /**
     * 観たい作品削除
     *
     * @param skhnCd 作品コード
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
    getFilmReviewList(_skhnCd: string, _kiinCd: string, _rcdNum: string, _shtkNum: string): Promise<void>;
    /**
     * 使用済チケット履歴削除
     *
     * @param mvilgNo        ムビログ番号
     * @param knytcktSttsKbn 購入チケットステータス区分
     */
    deleteUsedTicketHistory(mvilgNo: string, knytcktSttsKbn: string): Promise<{
        response: any;
        result: boolean;
    }>;
    /**
     * 座席予約状況
     *
     * @param mvilgNo ムビログ番号
     */
    getSeatReservationStatusList(mvilgNo: string): Promise<{
        response: any;
        result: SeatReservationStatusListResult[];
    }>;
    /**
     * 鑑賞記録リスト検索
     *
     * @param mvilgNo ムビログ番号
     */
    getWatchRecordList(mvilgNo: string): Promise<{
        response: any;
        result: WatchRecordResult[];
    }>;
    /**
     * ギフト送信状況リスト検索
     *
     * @param mvilgNo ムビログ番号
     */
    getSentGiftStatusList(mvilgNo: string): Promise<{
        response: any;
        result: SentGiftStatusListResult[];
    }>;
    /**
     * 電子券QRコード生成 (ムビログ用)
     *
     * @param knyknrNo 購入管理番号
     */
    createQrCodeInMovieLog(knyknrNo: string): Promise<{
        response: any;
        result: string;
    }>;
}
