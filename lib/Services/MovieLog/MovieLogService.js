"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Service_1 = require("../../common/Service");
const Constants_1 = require("../../common/util/Constants");
const GetFavoriteFilmListResult_1 = require("./models/GetFavoriteFilmListResult");
const GetUnusedTicketListResult_1 = require("./models/GetUnusedTicketListResult");
const SeatReservationStatusListResult_1 = require("./models/SeatReservationStatusListResult");
const SentGiftStatusListResult_1 = require("./models/SentGiftStatusListResult");
const ShyzmtcktInfoListResult_1 = require("./models/ShyzmtcktInfoListResult");
const WatchRecordResult_1 = require("./models/WatchRecordResult");
/**
 * MovieLogService
 */
class MovieLogService extends Service_1.Service {
    /**
     * 観たい作品検索
     *
     * @param kiinCd  会員コード
     * @param rcdNum  レコード数
     * @param shtkNum 取得件数
     * @param dvcTyp  デバイス区分
     */
    getFavoriteFilmList(kiinCd, rcdNum, shtkNum, dvcTyp) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'GetFavoriteFilmList';
            const args = {
                kiinCd: kiinCd,
                rcdNum: rcdNum,
                shtkNum: shtkNum,
                dvcTyp: dvcTyp
            };
            let getFavoriteFilmListResult;
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        getFavoriteFilmListResult = GetFavoriteFilmListResult_1.GetFavoriteFilmListResult.parse(result);
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: getFavoriteFilmListResult
                    });
                });
            });
        });
    }
    /**
     * 未使用チケット検索
     *
     * @param kiinCd 会員コード
     * @param dvcTyp デバイス区分
     */
    getUnusedTicketList(kiinCd, dvcTyp) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'GetUnusedTicketList';
            const args = {
                kiinCd: kiinCd,
                dvcTyp: dvcTyp
            };
            let getUnusedTicketListResult;
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        getUnusedTicketListResult = GetUnusedTicketListResult_1.GetUnusedTicketListResult.parse(result);
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: getUnusedTicketListResult
                    });
                });
            });
        });
    }
    /**
     * 座席予約済チケット検索
     *
     * @param kiinCd 会員コード
     * @param dvcTyp デバイス区分
     */
    getSeatReservedTicketList(kiinCd, dvcTyp) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'GetSeatReservedTicketList';
            const args = {
                kiinCd: kiinCd,
                dvcTyp: dvcTyp
            };
            let shyzmtcktInfoListResult;
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS
                        || result.RESULT_INFO.STATUS === 'L001') {
                        shyzmtcktInfoListResult = ShyzmtcktInfoListResult_1.ShyzmtcktInfoListResult.parse(result);
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: shyzmtcktInfoListResult
                    });
                });
            });
        });
    }
    /**
     * 鑑賞済チケット検索
     *
     * @param kiinCd 会員コード
     * @param dvcTyp デバイス区分
     */
    getWatchedTicketList(kiinCd, dvcTyp) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'GetWatchedTicketList';
            const args = {
                kiinCd: kiinCd,
                dvcTyp: dvcTyp
            };
            let shyzmtcktInfoListResult;
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS
                        || result.RESULT_INFO.STATUS === 'L001') {
                        shyzmtcktInfoListResult = ShyzmtcktInfoListResult_1.ShyzmtcktInfoListResult.parse(result);
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: shyzmtcktInfoListResult
                    });
                });
            });
        });
    }
    /**
     * ギフト贈呈済チケット検索
     *
     * @param kiinCd 会員コード
     * @param dvcTyp デバイス区分
     */
    getGiftTicketList(kiinCd, dvcTyp) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'GetGiftTicketList';
            const args = {
                kiinCd: kiinCd,
                dvcTyp: dvcTyp
            };
            let shyzmtcktInfoListResult;
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS
                        || result.RESULT_INFO.STATUS === 'L001') {
                        shyzmtcktInfoListResult = ShyzmtcktInfoListResult_1.ShyzmtcktInfoListResult.parse(result);
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: shyzmtcktInfoListResult
                    });
                });
            });
        });
    }
    /**
     * 有効期限切れチケット検索
     *
     * @param kiinCd 会員コード
     * @param dvcTyp デバイス区分
     */
    getExpiredTicketList(kiinCd, dvcTyp) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'GetExpiredTicketList';
            const args = {
                kiinCd: kiinCd,
                dvcTyp: dvcTyp
            };
            let shyzmtcktInfoListResult;
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS
                        || result.RESULT_INFO.STATUS === 'L001') {
                        shyzmtcktInfoListResult = ShyzmtcktInfoListResult_1.ShyzmtcktInfoListResult.parse(result);
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: shyzmtcktInfoListResult
                    });
                });
            });
        });
    }
    /**
     * 観たい作品登録
     *
     * @param skhnCd 作品コード
     */
    registerFavoriteFilm(skhnCd) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'RegisterFavoriteFilm';
            const args = {
                skhnCd: skhnCd
            };
            let isSuccess = false;
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS
                        || result.RESULT_INFO.STATUS === 'L002') {
                        isSuccess = true;
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: isSuccess
                    });
                });
            });
        });
    }
    /**
     * 観たい作品削除
     *
     * @param skhnCd 作品コード
     */
    deleteFavoriteFilm(skhnCd) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'DeleteFavoriteFilm';
            const args = {
                skhnCd: skhnCd
            };
            let isSuccess = false;
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        isSuccess = true;
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: isSuccess
                    });
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
    // tslint:disable-next-line:prefer-function-over-method
    getFilmReviewList(_skhnCd, _kiinCd, _rcdNum, _shtkNum) {
        return __awaiter(this, void 0, void 0, function* () {
            // const method = 'GetFilmReviewList';
            // const args = {
            //     skhnCd: skhnCd,
            //     kiinCd: kiinCd,
            //     rcdNum: rcdNum,
            //     shtkNum: shtkNum
            // };
        });
    }
    /**
     * 使用済チケット履歴削除
     *
     * @param mvilgNo        ムビログ番号
     * @param knytcktSttsKbn 購入チケットステータス区分
     */
    deleteUsedTicketHistory(mvilgNo, knytcktSttsKbn) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'DeleteUsedTicketHistory';
            const args = {
                mvilgNo: mvilgNo,
                knytcktSttsKbn: knytcktSttsKbn
            };
            let isSuccess = false;
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS
                        || result.RESULT_INFO.STATUS === 'L001') {
                        isSuccess = true;
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: isSuccess
                    });
                });
            });
        });
    }
    /**
     * 座席予約状況
     *
     * @param mvilgNo ムビログ番号
     */
    getSeatReservationStatusList(mvilgNo) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'GetSeatReservationStatusList';
            const args = {
                mvilgNo: mvilgNo
            };
            let seatReservationStatusListResults;
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        seatReservationStatusListResults = [];
                        if (Array.isArray(result.ZSKYYKJYKY_INFO.ZskyykjykyInfo)) {
                            for (const zskyykjykyInfo of result.ZSKYYKJYKY_INFO.ZskyykjykyInfo) {
                                seatReservationStatusListResults.push(SeatReservationStatusListResult_1.SeatReservationStatusListResult.parse(zskyykjykyInfo));
                            }
                        }
                        else {
                            seatReservationStatusListResults.push(SeatReservationStatusListResult_1.SeatReservationStatusListResult.parse(result.ZSKYYKJYKY_INFO.ZskyykjykyInfo));
                        }
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: seatReservationStatusListResults
                    });
                });
            });
        });
    }
    /**
     * 鑑賞記録リスト検索
     *
     * @param mvilgNo ムビログ番号
     */
    getWatchRecordList(mvilgNo) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'GetWatchRecordList';
            const args = {
                mvilgNo: mvilgNo
            };
            let watchRecordResults;
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        watchRecordResults = [];
                        if (Array.isArray(result.KNSHKRK_INFO.KnshkrkInfo)) {
                            for (const knshkrkInfo of result.KNSHKRK_INFO.KnshkrkInfo) {
                                watchRecordResults.push(WatchRecordResult_1.WatchRecordResult.parse(knshkrkInfo));
                            }
                        }
                        else {
                            watchRecordResults.push(WatchRecordResult_1.WatchRecordResult.parse(result.KNSHKRK_INFO.KnshkrkInfo));
                        }
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: watchRecordResults
                    });
                });
            });
        });
    }
    /**
     * ギフト送信状況リスト検索
     *
     * @param mvilgNo ムビログ番号
     */
    getSentGiftStatusList(mvilgNo) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'GetSentGiftStatusList';
            const args = {
                mvilgNo: mvilgNo
            };
            let sentGiftStatusListResults;
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        sentGiftStatusListResults = [];
                        if (Array.isArray(result.ZSKYYKJYKY_INFO.ZskyykjykyInfo)) {
                            for (const zskyykjykyInfo of result.ZSKYYKJYKY_INFO.ZskyykjykyInfo) {
                                sentGiftStatusListResults.push(SentGiftStatusListResult_1.SentGiftStatusListResult.parse(zskyykjykyInfo));
                            }
                        }
                        else {
                            sentGiftStatusListResults.push(SentGiftStatusListResult_1.SentGiftStatusListResult.parse(result.ZSKYYKJYKY_INFO.ZskyykjykyInfo));
                        }
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: sentGiftStatusListResults
                    });
                });
            });
        });
    }
    /**
     * 電子券QRコード生成 (ムビログ用)
     *
     * @param knyknrNo 購入管理番号
     */
    createQrCodeInMovieLog(knyknrNo) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'CreateQrCodeInMovieLog';
            const args = {
                knyknrNo: knyknrNo
            };
            let qrcdUrl;
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        qrcdUrl = result.QRCD_URL;
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: qrcdUrl
                    });
                });
            });
        });
    }
}
exports.MovieLogService = MovieLogService;
