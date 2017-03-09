"use strict";
const Service_1 = require("../../Common/Service");
const Constants_1 = require("../../Common/Util/Constants");
const GetFavoriteFilmListResult_1 = require("./Models/GetFavoriteFilmListResult");
const GetUnusedTicketListResult_1 = require("./Models/GetUnusedTicketListResult");
const SeatReservationStatusListResult_1 = require("./Models/SeatReservationStatusListResult");
const SentGiftStatusListResult_1 = require("./Models/SentGiftStatusListResult");
const ShyzmtcktInfoListResult_1 = require("./Models/ShyzmtcktInfoListResult");
const WatchRecordResult_1 = require("./Models/WatchRecordResult");
/**
 * MovieLogService
 * @class
 * @extends {Service}
 */
class MovieLogService extends Service_1.default {
    /**
     * 観たい作品検索
     *
     * @param {string} kiinCd  会員コード
     * @param {number} rcdNum  レコード数
     * @param {number} shtkNum 取得件数
     * @param {string} dvcTyp  デバイス区分
     */
    getFavoriteFilmList(kiinCd, rcdNum, shtkNum, dvcTyp, cb) {
        const method = 'GetFavoriteFilmList';
        const args = {
            kiinCd: kiinCd,
            rcdNum: rcdNum,
            shtkNum: shtkNum,
            dvcTyp: dvcTyp
        };
        let getFavoriteFilmListResult;
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, getFavoriteFilmListResult);
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                getFavoriteFilmListResult = GetFavoriteFilmListResult_1.default.parse(result);
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
    getUnusedTicketList(kiinCd, dvcTyp, cb) {
        const method = 'GetUnusedTicketList';
        const args = {
            kiinCd: kiinCd,
            dvcTyp: dvcTyp
        };
        let getUnusedTicketListResult;
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, getUnusedTicketListResult);
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                getUnusedTicketListResult = GetUnusedTicketListResult_1.default.parse(result);
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
    getSeatReservedTicketList(kiinCd, dvcTyp, cb) {
        const method = 'GetSeatReservedTicketList';
        const args = {
            kiinCd: kiinCd,
            dvcTyp: dvcTyp
        };
        let shyzmtcktInfoListResult;
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, shyzmtcktInfoListResult);
            // リスト無しの時はSTATUS_CHECK_ERROR(L001)が返る
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS
                || result.RESULT_INFO.STATUS === 'L001') {
                shyzmtcktInfoListResult = ShyzmtcktInfoListResult_1.default.parse(result);
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
    getWatchedTicketList(kiinCd, dvcTyp, cb) {
        const method = 'GetWatchedTicketList';
        const args = {
            kiinCd: kiinCd,
            dvcTyp: dvcTyp
        };
        let shyzmtcktInfoListResult;
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, shyzmtcktInfoListResult);
            // リスト無しの時はSTATUS_CHECK_ERROR(L001)が返る
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS
                || result.RESULT_INFO.STATUS === 'L001') {
                shyzmtcktInfoListResult = ShyzmtcktInfoListResult_1.default.parse(result);
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
    getGiftTicketList(kiinCd, dvcTyp, cb) {
        const method = 'GetGiftTicketList';
        const args = {
            kiinCd: kiinCd,
            dvcTyp: dvcTyp
        };
        let shyzmtcktInfoListResult;
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, shyzmtcktInfoListResult);
            // リスト無しの時はSTATUS_CHECK_ERROR(L001)が返る
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS
                || result.RESULT_INFO.STATUS === 'L001') {
                shyzmtcktInfoListResult = ShyzmtcktInfoListResult_1.default.parse(result);
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
    getExpiredTicketList(kiinCd, dvcTyp, cb) {
        const method = 'GetExpiredTicketList';
        const args = {
            kiinCd: kiinCd,
            dvcTyp: dvcTyp
        };
        let shyzmtcktInfoListResult;
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, shyzmtcktInfoListResult);
            // リスト無しの時はSTATUS_CHECK_ERROR(L001)が返る
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS
                || result.RESULT_INFO.STATUS === 'L001') {
                shyzmtcktInfoListResult = ShyzmtcktInfoListResult_1.default.parse(result);
            }
            cb(err, response, shyzmtcktInfoListResult);
        });
    }
    /**
     * 観たい作品登録
     *
     * @param {string} skhnCd 作品コード
     */
    registerFavoriteFilm(skhnCd, cb) {
        const method = 'RegisterFavoriteFilm';
        const args = {
            skhnCd: skhnCd
        };
        let isSuccess = false;
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, isSuccess);
            // L002は登録済みとしてエラーにはしない
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS
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
    deleteFavoriteFilm(skhnCd, cb) {
        const method = 'DeleteFavoriteFilm';
        const args = {
            skhnCd: skhnCd
        };
        let isSuccess = false;
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, isSuccess);
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
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
    deleteUsedTicketHistory(mvilgNo, knytcktSttsKbn, cb) {
        const method = 'DeleteUsedTicketHistory';
        const args = {
            mvilgNo: mvilgNo,
            knytcktSttsKbn: knytcktSttsKbn
        };
        let isSuccess = false;
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, isSuccess);
            // 作品コード指定の上でSTATUS_CHECK_ERROR(L001)は対象なしとしてエラーにはしない
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS
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
    getSeatReservationStatusList(mvilgNo, cb) {
        const method = 'GetSeatReservationStatusList';
        const args = {
            mvilgNo: mvilgNo
        };
        let seatReservationStatusListResults;
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, seatReservationStatusListResults);
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                seatReservationStatusListResults = [];
                if (Array.isArray(result.ZSKYYKJYKY_INFO.ZskyykjykyInfo)) {
                    for (const zskyykjykyInfo of result.ZSKYYKJYKY_INFO.ZskyykjykyInfo) {
                        seatReservationStatusListResults.push(SeatReservationStatusListResult_1.default.parse(zskyykjykyInfo));
                    }
                }
                else {
                    seatReservationStatusListResults.push(SeatReservationStatusListResult_1.default.parse(result.ZSKYYKJYKY_INFO.ZskyykjykyInfo));
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
    getWatchRecordList(mvilgNo, cb) {
        const method = 'GetWatchRecordList';
        const args = {
            mvilgNo: mvilgNo
        };
        let watchRecordResults;
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, watchRecordResults);
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                watchRecordResults = [];
                if (Array.isArray(result.KNSHKRK_INFO.KnshkrkInfo)) {
                    for (const knshkrkInfo of result.KNSHKRK_INFO.KnshkrkInfo) {
                        watchRecordResults.push(WatchRecordResult_1.default.parse(knshkrkInfo));
                    }
                }
                else {
                    watchRecordResults.push(WatchRecordResult_1.default.parse(result.KNSHKRK_INFO.KnshkrkInfo));
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
    getSentGiftStatusList(mvilgNo, cb) {
        const method = 'GetSentGiftStatusList';
        const args = {
            mvilgNo: mvilgNo
        };
        let sentGiftStatusListResults;
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, sentGiftStatusListResults);
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                sentGiftStatusListResults = [];
                if (Array.isArray(result.ZSKYYKJYKY_INFO.ZskyykjykyInfo)) {
                    for (const zskyykjykyInfo of result.ZSKYYKJYKY_INFO.ZskyykjykyInfo) {
                        sentGiftStatusListResults.push(SentGiftStatusListResult_1.default.parse(zskyykjykyInfo));
                    }
                }
                else {
                    sentGiftStatusListResults.push(SentGiftStatusListResult_1.default.parse(result.ZSKYYKJYKY_INFO.ZskyykjykyInfo));
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
    createQrCodeInMovieLog(knyknrNo, cb) {
        const method = 'CreateQrCodeInMovieLog';
        const args = {
            knyknrNo: knyknrNo
        };
        let qrcdUrl;
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, qrcdUrl);
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                qrcdUrl = result.QRCD_URL;
            }
            cb(err, response, qrcdUrl);
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MovieLogService;