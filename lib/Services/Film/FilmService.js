"use strict";
const Service_1 = require("../../common/Service");
const Constants_1 = require("../../common/Util/Constants");
const BnnrInfoResult_1 = require("./Models/BnnrInfoResult");
const DgtlincntvInfoResult_1 = require("./Models/DgtlincntvInfoResult");
const FilmResult_1 = require("./Models/FilmResult");
const GetTrailerDetailResult_1 = require("./Models/GetTrailerDetailResult");
const TicketInfoResult_1 = require("./Models/TicketInfoResult");
/**
 * FilmService
 * @class
 */
class FilmService extends Service_1.default {
    /**
     * 作品詳細情報照会
     * @param {string} skhnCd 作品コード
     * @param {string} dvcTyp デバイス区分
     */
    getFilmDetail(skhnCd, dvcTyp, cb) {
        const method = 'GetFilmDetail';
        const args = {
            skhnCd: skhnCd,
            dvcTyp: dvcTyp
        };
        let filmResult;
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, filmResult);
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                filmResult = FilmResult_1.default.parse(result);
            }
            cb(err, response, filmResult);
        });
    }
    /**
     * トップページ作品検索
     *
     * @param {string} dvcTyp
     */
    getFilmTopPage(dvcTyp, cb) {
        const method = 'GetFilmTopPage';
        const args = {
            dvcTyp: dvcTyp
        };
        let filmResults;
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, filmResults);
            // console.log('result', result.SKHN_INFO.SkhnInfo[0])
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                filmResults = [];
                if (Array.isArray(result.SKHN_INFO.SkhnInfo)) {
                    for (const skhnInfo of result.SKHN_INFO.SkhnInfo) {
                        filmResults.push(FilmResult_1.default.parse(skhnInfo));
                    }
                }
                else {
                    filmResults.push(FilmResult_1.default.parse(result.SKHN_INFO.SkhnInfo));
                }
            }
            // console.log('filmResults', filmResults[0])
            cb(err, response, filmResults);
        });
    }
    /**
     * 鑑賞券情報検索
     *
     * @param {string} skhnCd 作品コード
     */
    getTicketInfoList(skhnCd, cb) {
        const method = 'GetTicketInfoList';
        const args = {
            skhnCd: skhnCd
        };
        let ticketInfoResult;
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, ticketInfoResult);
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                ticketInfoResult = [];
                if (Array.isArray(result.KNSHKN_INFO.KnshknInfo)) {
                    for (const knshknInfo of result.KNSHKN_INFO.KnshknInfo) {
                        ticketInfoResult.push(TicketInfoResult_1.default.parse(knshknInfo));
                    }
                }
                else {
                    ticketInfoResult.push(TicketInfoResult_1.default.parse(result.KNSHKN_INFO.KnshknInfo));
                }
            }
            cb(err, response, ticketInfoResult);
        });
    }
    /**
     * バナーリスト取得
     *
     * @param {string} skhnCd 作品コード
     * @param {string} dvcTyp デバイス区分
     */
    getBannerList(skhnCd, dvcTyp, cb) {
        const method = 'GetBannerList';
        const args = {
            skhnCd: skhnCd,
            dvcTyp: dvcTyp
        };
        let bnnrInfoResults;
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, bnnrInfoResults);
            // リスト無しの時はSTATUS_CHECK_ERROR(L001)が返る
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS
                || result.RESULT_INFO.STATUS === 'L001') {
                bnnrInfoResults = [];
                if (result.BNNR_INFO !== null && result.BNNR_INFO.hasOwnProperty('BnnrInfo')) {
                    if (Array.isArray(result.BNNR_INFO.BnnrInfo)) {
                        for (const info of result.BNNR_INFO.BnnrInfo) {
                            bnnrInfoResults.push(BnnrInfoResult_1.default.parse(info));
                        }
                    }
                    else {
                        bnnrInfoResults.push(BnnrInfoResult_1.default.parse(result.BNNR_INFO.BnnrInfo));
                    }
                }
            }
            cb(err, response, bnnrInfoResults);
        });
    }
    /**
     * 予告編取得
     *
     * @param {string} skhnCd 作品コード
     * @param {string} dvcTyp デバイス区分
     */
    getTrailerDetail(skhnCd, dvcTyp, cb) {
        const method = 'GetTrailerDetail';
        const args = {
            skhnCd: skhnCd,
            dvcTyp: dvcTyp
        };
        let getTrailerDetailResult;
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, getTrailerDetailResult);
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                getTrailerDetailResult = GetTrailerDetailResult_1.default.parse(result);
            }
            cb(err, response, getTrailerDetailResult);
        });
    }
    /**
     * 特典取得
     *
     * @param {string} skhnCd 作品コード
     * @param {string} dvcTyp デバイス区分
     */
    getDigitalIncentiveList(skhnCd, dvcTyp, cb) {
        const method = 'GetDigitalIncentiveList';
        const args = {
            skhnCd: skhnCd,
            dvcTyp: dvcTyp
        };
        let dgtlincntvInfoResults;
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, dgtlincntvInfoResults);
            // リスト無しの時はSTATUS_CHECK_ERROR(L001)が返る
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS
                || result.RESULT_INFO.STATUS === 'L001') {
                dgtlincntvInfoResults = [];
                if (result.DGTLINCNTV_INFO !== null && result.DGTLINCNTV_INFO.hasOwnProperty('DgtlincntvInfo')) {
                    if (Array.isArray(result.DGTLINCNTV_INFO.DgtlincntvInfo)) {
                        for (const info of result.DGTLINCNTV_INFO.DgtlincntvInfo) {
                            dgtlincntvInfoResults.push(DgtlincntvInfoResult_1.default.parse(info));
                        }
                    }
                    else {
                        dgtlincntvInfoResults.push(DgtlincntvInfoResult_1.default.parse(result.DGTLINCNTV_INFO.DgtlincntvInfo));
                    }
                }
            }
            cb(err, response, dgtlincntvInfoResults);
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FilmService;
