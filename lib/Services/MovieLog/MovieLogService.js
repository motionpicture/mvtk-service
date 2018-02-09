"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Service_1 = require("../../common/Service");
const Constants_1 = require("../../common/util/Constants");
const GetFavoriteFilmListResult_1 = require("./models/GetFavoriteFilmListResult");
const GetUnusedTicketListResult_1 = require("./models/GetUnusedTicketListResult");
const ShyzmtcktInfoListResult_1 = require("./models/ShyzmtcktInfoListResult");
const WatchRecordResult_1 = require("./models/WatchRecordResult");
const SeatReservationStatusListResult_1 = require("./models/SeatReservationStatusListResult");
const SentGiftStatusListResult_1 = require("./models/SentGiftStatusListResult");
class MovieLogService extends Service_1.default {
    /**
     * 観たい作品検索
     *
     * @param {string} kiinCd  会員コード
     * @param {number} rcdNum  レコード数
     * @param {number} shtkNum 取得件数
     * @param {string} dvcTyp  デバイス区分
     */
    getFavoriteFilmList(kiinCd, rcdNum, shtkNum, dvcTyp) {
        let method = 'GetFavoriteFilmList';
        let args = {
            kiinCd: kiinCd,
            rcdNum: rcdNum,
            shtkNum: shtkNum,
            dvcTyp: dvcTyp
        };
        let getFavoriteFilmListResult;
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    getFavoriteFilmListResult = GetFavoriteFilmListResult_1.default.parse(result);
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: getFavoriteFilmListResult
                });
            });
        });
    }
    /**
     * 未使用チケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    getUnusedTicketList(kiinCd, dvcTyp) {
        let method = 'GetUnusedTicketList';
        let args = {
            kiinCd: kiinCd,
            dvcTyp: dvcTyp
        };
        let getUnusedTicketListResult;
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    getUnusedTicketListResult = GetUnusedTicketListResult_1.default.parse(result);
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: getUnusedTicketListResult
                });
            });
        });
    }
    /**
     * 座席予約済チケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    getSeatReservedTicketList(kiinCd, dvcTyp) {
        let method = 'GetSeatReservedTicketList';
        let args = {
            kiinCd: kiinCd,
            dvcTyp: dvcTyp
        };
        let shyzmtcktInfoListResult;
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS
                    || result.RESULT_INFO.STATUS === 'L001') {
                    shyzmtcktInfoListResult = ShyzmtcktInfoListResult_1.default.parse(result);
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: shyzmtcktInfoListResult
                });
            });
        });
    }
    /**
     * 鑑賞済チケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    getWatchedTicketList(kiinCd, dvcTyp) {
        let method = 'GetWatchedTicketList';
        let args = {
            kiinCd: kiinCd,
            dvcTyp: dvcTyp
        };
        let shyzmtcktInfoListResult;
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS
                    || result.RESULT_INFO.STATUS === 'L001') {
                    shyzmtcktInfoListResult = ShyzmtcktInfoListResult_1.default.parse(result);
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: shyzmtcktInfoListResult
                });
            });
        });
    }
    /**
     * ギフト贈呈済チケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    getGiftTicketList(kiinCd, dvcTyp) {
        let method = 'GetGiftTicketList';
        let args = {
            kiinCd: kiinCd,
            dvcTyp: dvcTyp
        };
        let shyzmtcktInfoListResult;
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS
                    || result.RESULT_INFO.STATUS === 'L001') {
                    shyzmtcktInfoListResult = ShyzmtcktInfoListResult_1.default.parse(result);
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: shyzmtcktInfoListResult
                });
            });
        });
    }
    /**
     * 有効期限切れチケット検索
     *
     * @param {string} kiinCd 会員コード
     * @param {string} dvcTyp デバイス区分
     */
    getExpiredTicketList(kiinCd, dvcTyp) {
        let method = 'GetExpiredTicketList';
        let args = {
            kiinCd: kiinCd,
            dvcTyp: dvcTyp
        };
        let shyzmtcktInfoListResult;
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS
                    || result.RESULT_INFO.STATUS === 'L001') {
                    shyzmtcktInfoListResult = ShyzmtcktInfoListResult_1.default.parse(result);
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: shyzmtcktInfoListResult
                });
            });
        });
    }
    /**
     * 観たい作品登録
     *
     * @param {string} skhnCd 作品コード
     */
    registerFavoriteFilm(skhnCd) {
        let method = 'RegisterFavoriteFilm';
        let args = {
            skhnCd: skhnCd
        };
        let isSuccess = false;
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS
                    || result.RESULT_INFO.STATUS === 'L002') {
                    isSuccess = true;
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: isSuccess
                });
            });
        });
    }
    /**
     * 観たい作品削除
     *
     * @param {string} skhnCd 作品コード
     */
    deleteFavoriteFilm(skhnCd) {
        let method = 'DeleteFavoriteFilm';
        let args = {
            skhnCd: skhnCd
        };
        let isSuccess = false;
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    isSuccess = true;
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: isSuccess
                });
            });
        });
    }
    /**
     * 作品感想検索
     *
     * @param skhnCd  作品コード
     * @param kiinCd  会員コード
     * @param rcdNum  レコード数
     * @param shtkNum 取得件数
     */
    getFilmReviewList(skhnCd, kiinCd, rcdNum, shtkNum) {
        let method = 'GetFilmReviewList';
        let args = {};
    }
    /**
     * 使用済チケット履歴削除
     *
     * @param {string} mvilgNo        ムビログ番号
     * @param {string} knytcktSttsKbn 購入チケットステータス区分
     */
    deleteUsedTicketHistory(mvilgNo, knytcktSttsKbn) {
        let method = 'DeleteUsedTicketHistory';
        let args = {
            mvilgNo: mvilgNo,
            knytcktSttsKbn: knytcktSttsKbn
        };
        let isSuccess = false;
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS
                    || result.RESULT_INFO.STATUS === 'L001') {
                    isSuccess = true;
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: isSuccess
                });
            });
        });
    }
    /**
     * 座席予約状況
     *
     * @param {string} mvilgNo ムビログ番号
     */
    getSeatReservationStatusList(mvilgNo) {
        let method = 'GetSeatReservationStatusList';
        let args = {
            mvilgNo: mvilgNo
        };
        let seatReservationStatusListResults;
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    seatReservationStatusListResults = [];
                    if (Array.isArray(result.ZSKYYKJYKY_INFO.ZskyykjykyInfo)) {
                        for (let zskyykjykyInfo of result.ZSKYYKJYKY_INFO.ZskyykjykyInfo) {
                            seatReservationStatusListResults.push(SeatReservationStatusListResult_1.default.parse(zskyykjykyInfo));
                        }
                    }
                    else {
                        seatReservationStatusListResults.push(SeatReservationStatusListResult_1.default.parse(result.ZSKYYKJYKY_INFO.ZskyykjykyInfo));
                    }
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: seatReservationStatusListResults
                });
            });
        });
    }
    /**
     * 鑑賞記録リスト検索
     *
     * @param {string} mvilgNo ムビログ番号
     */
    getWatchRecordList(mvilgNo) {
        let method = 'GetWatchRecordList';
        let args = {
            mvilgNo: mvilgNo
        };
        let watchRecordResults;
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    watchRecordResults = [];
                    if (Array.isArray(result.KNSHKRK_INFO.KnshkrkInfo)) {
                        for (let knshkrkInfo of result.KNSHKRK_INFO.KnshkrkInfo) {
                            watchRecordResults.push(WatchRecordResult_1.default.parse(knshkrkInfo));
                        }
                    }
                    else {
                        watchRecordResults.push(WatchRecordResult_1.default.parse(result.KNSHKRK_INFO.KnshkrkInfo));
                    }
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: watchRecordResults
                });
            });
        });
    }
    /**
     * ギフト送信状況リスト検索
     *
     * @param {string} mvilgNo ムビログ番号
     */
    getSentGiftStatusList(mvilgNo) {
        let method = 'GetSentGiftStatusList';
        let args = {
            mvilgNo: mvilgNo
        };
        let sentGiftStatusListResults;
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    sentGiftStatusListResults = [];
                    if (Array.isArray(result.ZSKYYKJYKY_INFO.ZskyykjykyInfo)) {
                        for (let zskyykjykyInfo of result.ZSKYYKJYKY_INFO.ZskyykjykyInfo) {
                            sentGiftStatusListResults.push(SentGiftStatusListResult_1.default.parse(zskyykjykyInfo));
                        }
                    }
                    else {
                        sentGiftStatusListResults.push(SentGiftStatusListResult_1.default.parse(result.ZSKYYKJYKY_INFO.ZskyykjykyInfo));
                    }
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: sentGiftStatusListResults
                });
            });
        });
    }
    /**
     * 電子券QRコード生成 (ムビログ用)
     *
     * @param {string} knyknrNo 購入管理番号
     */
    createQrCodeInMovieLog(knyknrNo) {
        let method = 'CreateQrCodeInMovieLog';
        let args = {
            knyknrNo: knyknrNo
        };
        let qrcdUrl;
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    qrcdUrl = result.QRCD_URL;
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: qrcdUrl
                });
            });
        });
    }
}
exports.default = MovieLogService;
