import Service from '../../Common/Service';
import Constants from '../../Common/Util/Constants';
import GetFavoriteFilmListResult from './Models/GetFavoriteFilmListResult';
import GetUnusedTicketListResult from './Models/GetUnusedTicketListResult';
import SeatReservationStatusListResult from './Models/SeatReservationStatusListResult';
import SentGiftStatusListResult from './Models/SentGiftStatusListResult';
import ShyzmtcktInfoListResult from './Models/ShyzmtcktInfoListResult';
import WatchRecordResult from './Models/WatchRecordResult';

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
    public getFavoriteFilmList(
        kiinCd: string,
        rcdNum: number,
        shtkNum: number,
        dvcTyp: string,
        cb: (err: any, resonse: any, getFavoriteFilmListResult: GetFavoriteFilmListResult) => void
    ): void {
        const method = 'GetFavoriteFilmList';

        const args = {
            kiinCd: kiinCd,
            rcdNum: rcdNum,
            shtkNum: shtkNum,
            dvcTyp: dvcTyp
        };

        let getFavoriteFilmListResult: GetFavoriteFilmListResult;

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, getFavoriteFilmListResult);

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                getFavoriteFilmListResult = GetFavoriteFilmListResult.parse(result);
            }

            cb(err, response, getFavoriteFilmListResult);
        });
    }

    /**
     * 未使用チケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    public getUnusedTicketList(
        kiinCd: string,
        dvcTyp: string,
        cb: (err: any, resonse: any, getUnusedTicketListResult: GetUnusedTicketListResult) => void
    ): void {
        const method = 'GetUnusedTicketList';

        const args = {
            kiinCd: kiinCd,
            dvcTyp: dvcTyp
        };

        let getUnusedTicketListResult: GetUnusedTicketListResult;

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, getUnusedTicketListResult);

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                getUnusedTicketListResult = GetUnusedTicketListResult.parse(result);
            }

            cb(err, response, getUnusedTicketListResult);
        });
    }

    /**
     * 座席予約済チケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    public getSeatReservedTicketList(
        kiinCd: string,
        dvcTyp: string,
        cb: (err: any, resonse: any, shyzmtcktInfoListResult: ShyzmtcktInfoListResult) => void
    ): void {
        const method = 'GetSeatReservedTicketList';

        const args = {
            kiinCd: kiinCd,
            dvcTyp: dvcTyp
        };

        let shyzmtcktInfoListResult: ShyzmtcktInfoListResult;

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, shyzmtcktInfoListResult);

            // リスト無しの時はSTATUS_CHECK_ERROR(L001)が返る
            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
                || result.RESULT_INFO.STATUS === 'L001') {
                shyzmtcktInfoListResult = ShyzmtcktInfoListResult.parse(result);
            }

            cb(err, response, shyzmtcktInfoListResult);
        });
    }

    /**
     * 鑑賞済チケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    public getWatchedTicketList(
        kiinCd: string,
        dvcTyp: string,
        cb: (err: any, resonse: any, shyzmtcktInfoListResult: ShyzmtcktInfoListResult) => void
    ): void {
        const method = 'GetWatchedTicketList';

        const args = {
            kiinCd: kiinCd,
            dvcTyp: dvcTyp
        };

        let shyzmtcktInfoListResult: ShyzmtcktInfoListResult;

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, shyzmtcktInfoListResult);

            // リスト無しの時はSTATUS_CHECK_ERROR(L001)が返る
            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
                || result.RESULT_INFO.STATUS === 'L001') {
                shyzmtcktInfoListResult = ShyzmtcktInfoListResult.parse(result);
            }

            cb(err, response, shyzmtcktInfoListResult);
        });
    }

    /**
     * ギフト贈呈済チケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    public getGiftTicketList(
        kiinCd: string,
        dvcTyp: string,
        cb: (err: any, resonse: any, shyzmtcktInfoListResult: ShyzmtcktInfoListResult) => void
    ): void {
        const method = 'GetGiftTicketList';

        const args = {
            kiinCd: kiinCd,
            dvcTyp: dvcTyp
        };

        let shyzmtcktInfoListResult: ShyzmtcktInfoListResult;

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, shyzmtcktInfoListResult);

            // リスト無しの時はSTATUS_CHECK_ERROR(L001)が返る
            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
                || result.RESULT_INFO.STATUS === 'L001') {
                shyzmtcktInfoListResult = ShyzmtcktInfoListResult.parse(result);
            }

            cb(err, response, shyzmtcktInfoListResult);
        });
    }

    /**
     * 有効期限切れチケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    public getExpiredTicketList(
        kiinCd: string,
        dvcTyp: string,
        cb: (err: any, resonse: any, shyzmtcktInfoListResult: ShyzmtcktInfoListResult) => void
    ): void {
        const method = 'GetExpiredTicketList';

        const args = {
            kiinCd: kiinCd,
            dvcTyp: dvcTyp
        };

        let shyzmtcktInfoListResult: ShyzmtcktInfoListResult;

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, shyzmtcktInfoListResult);

            // リスト無しの時はSTATUS_CHECK_ERROR(L001)が返る
            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
                || result.RESULT_INFO.STATUS === 'L001') {
                shyzmtcktInfoListResult = ShyzmtcktInfoListResult.parse(result);
            }

            cb(err, response, shyzmtcktInfoListResult);
        });
    }

    /**
     * 観たい作品登録
     *
     * @param {string} skhnCd 作品コード
     */
    public registerFavoriteFilm(skhnCd: string, cb: (err: any, resonse: any, isSuccess: boolean) => void): void {
        const method = 'RegisterFavoriteFilm';

        const args = {
            skhnCd: skhnCd
        };

        let isSuccess = false;

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, isSuccess);

            // L002は登録済みとしてエラーにはしない
            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
                || result.RESULT_INFO.STATUS === 'L002') {
                isSuccess = true;
            }

            cb(err, response, isSuccess);
        });
    }

    /**
     * 観たい作品削除
     *
     * @param {string} skhnCd 作品コード
     */
    public deleteFavoriteFilm(skhnCd: string, cb: (err: any, resonse: any, isSuccess: boolean) => void): void {
        const method = 'DeleteFavoriteFilm';

        const args = {
            skhnCd: skhnCd
        };

        let isSuccess = false;

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, isSuccess);

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                isSuccess = true;
            }

            cb(err, response, isSuccess);
        });
    }

    // /**
    //  * 作品感想検索
    //  *
    //  * @param {string} skhnCd  作品コード
    //  * @param {string} kiinCd  会員コード
    //  * @param {number} rcdNum  レコード数
    //  * @param {number} shtkNum 取得件数
    //  */
    // public getFilmReviewList(skhnCd: string, kiinCd: string, rcdNum: number, shtkNum: number, cb: Function) {
    //     const method = 'GetFilmReviewList';

    //     const args = {
    //     };
    // }

    /**
     * 使用済チケット履歴削除
     *
     * @param {string} mvilgNo        ムビログ番号
     * @param {string} knytcktSttsKbn 購入チケットステータス区分
     * @param {Function} cb
     */
    public deleteUsedTicketHistory(mvilgNo: string, knytcktSttsKbn: string, cb: Function) {
        const method = 'DeleteUsedTicketHistory';

        const args = {
            mvilgNo: mvilgNo,
            knytcktSttsKbn: knytcktSttsKbn
        };

        let isSuccess = false;

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, isSuccess);

            // 作品コード指定の上でSTATUS_CHECK_ERROR(L001)は対象なしとしてエラーにはしない
            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS
                || result.RESULT_INFO.STATUS === 'L001') {
                isSuccess = true;
            }

            cb(err, response, isSuccess);
        });
    }

    /**
     * 座席予約状況
     *
     * @param {string} mvilgNo ムビログ番号
     * @param {Function} cb
     */
    public getSeatReservationStatusList(mvilgNo: string, cb: Function) {
        const method = 'GetSeatReservationStatusList';

        const args = {
            mvilgNo: mvilgNo
        };

        let seatReservationStatusListResults: SeatReservationStatusListResult[];

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, seatReservationStatusListResults);

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                seatReservationStatusListResults = [];

                if (Array.isArray(result.ZSKYYKJYKY_INFO.ZskyykjykyInfo)) {
                    for (const zskyykjykyInfo of result.ZSKYYKJYKY_INFO.ZskyykjykyInfo) {
                        seatReservationStatusListResults.push(SeatReservationStatusListResult.parse(zskyykjykyInfo));
                    }
                } else {
                    seatReservationStatusListResults.push(SeatReservationStatusListResult.parse(result.ZSKYYKJYKY_INFO.ZskyykjykyInfo));
                }
            }

            cb(err, response, seatReservationStatusListResults);
        });
    }

    /**
     * 鑑賞記録リスト検索
     *
     * @param {string} mvilgNo ムビログ番号
     * @param {Function} cb
     */
    public getWatchRecordList(mvilgNo: string, cb: Function) {
        const method = 'GetWatchRecordList';

        const args = {
            mvilgNo: mvilgNo
        };

        let watchRecordResults: WatchRecordResult[];

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, watchRecordResults);

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                watchRecordResults = [];

                if (Array.isArray(result.KNSHKRK_INFO.KnshkrkInfo)) {
                    for (const knshkrkInfo of result.KNSHKRK_INFO.KnshkrkInfo) {
                        watchRecordResults.push(WatchRecordResult.parse(knshkrkInfo));
                    }
                } else {
                    watchRecordResults.push(WatchRecordResult.parse(result.KNSHKRK_INFO.KnshkrkInfo));
                }
            }

            cb(err, response, watchRecordResults);
        });
    }

    /**
     * ギフト送信状況リスト検索
     *
     * @param {string} mvilgNo ムビログ番号
     * @param {Function} cb
     */
    public getSentGiftStatusList(mvilgNo: string, cb: Function) {
        const method = 'GetSentGiftStatusList';

        const args = {
            mvilgNo: mvilgNo
        };

        let sentGiftStatusListResults: SentGiftStatusListResult[];

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, sentGiftStatusListResults);

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                sentGiftStatusListResults = [];

                if (Array.isArray(result.ZSKYYKJYKY_INFO.ZskyykjykyInfo)) {
                    for (const zskyykjykyInfo of result.ZSKYYKJYKY_INFO.ZskyykjykyInfo) {
                        sentGiftStatusListResults.push(SentGiftStatusListResult.parse(zskyykjykyInfo));
                    }
                } else {
                    sentGiftStatusListResults.push(SentGiftStatusListResult.parse(result.ZSKYYKJYKY_INFO.ZskyykjykyInfo));
                }
            }

            cb(err, response, sentGiftStatusListResults);
        });
    }

    /**
     * 電子券QRコード生成 (ムビログ用)
     *
     * @param {string} knyknrNo 購入管理番号
     */
    public createQrCodeInMovieLog(knyknrNo: string, cb: (err: any, resonse: any, qrcdUrl: string) => void): void {
        const method = 'CreateQrCodeInMovieLog';

        const args = {
            knyknrNo: knyknrNo
        };

        let qrcdUrl: string;

        this.call(method, args, (err, response, result) => {
            if (err) return cb(err, response, qrcdUrl);

            if (result.RESULT_INFO.STATUS === Constants.RESULT_INFO_STATUS_SUCCESS) {
                qrcdUrl = result.QRCD_URL;
            }

            cb(err, response, qrcdUrl);
        });
    }
}
