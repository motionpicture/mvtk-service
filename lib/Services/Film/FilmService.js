"use strict";
const Service_1 = require("../../common/Service");
const Constants_1 = require("../../common/Util/Constants");
const BnnrInfoResult_1 = require("./models/BnnrInfoResult");
const DgtlincntvInfoResult_1 = require("./models/DgtlincntvInfoResult");
const FilmResult_1 = require("./models/FilmResult");
const GetTrailerDetailResult_1 = require("./models/GetTrailerDetailResult");
const TicketInfoResult_1 = require("./models/TicketInfoResult");
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
    getFilmDetail(skhnCd, dvcTyp) {
        const method = 'GetFilmDetail';
        const args = {
            skhnCd: skhnCd,
            dvcTyp: dvcTyp
        };
        let filmResult;
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    result = FilmResult_1.default.parse(result);
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: filmResult
                });
            });
        });
    }
    /**
     * トップページ作品検索
     *
     * @param {string} dvcTyp
     */
    getFilmTopPage(dvcTyp) {
        const method = 'GetFilmTopPage';
        const args = {
            dvcTyp: dvcTyp
        };
        let filmResults = [];
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    if (Array.isArray(result.SKHN_INFO.SkhnInfo)) {
                        for (const skhnInfo of result.SKHN_INFO.SkhnInfo) {
                            filmResults.push(FilmResult_1.default.parse(skhnInfo));
                        }
                    }
                    else {
                        filmResults.push(FilmResult_1.default.parse(result.SKHN_INFO.SkhnInfo));
                    }
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: filmResults
                });
            });
        });
    }
    /**
     * 鑑賞券情報検索
     *
     * @param {string} skhnCd 作品コード
     */
    getTicketInfoList(skhnCd) {
        const method = 'GetTicketInfoList';
        const args = {
            skhnCd: skhnCd
        };
        let ticketInfoResult;
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
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
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: ticketInfoResult
                });
            });
        });
    }
    /**
     * バナーリスト取得
     *
     * @param {string} skhnCd 作品コード
     * @param {string} dvcTyp デバイス区分
     */
    getBannerList(skhnCd, dvcTyp) {
        const method = 'GetBannerList';
        const args = {
            skhnCd: skhnCd,
            dvcTyp: dvcTyp
        };
        let bnnrInfoResults;
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
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
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: bnnrInfoResults
                });
            });
        });
    }
    /**
     * 予告編取得
     *
     * @param {string} skhnCd 作品コード
     * @param {string} dvcTyp デバイス区分
     */
    getTrailerDetail(skhnCd, dvcTyp) {
        const method = 'GetTrailerDetail';
        const args = {
            skhnCd: skhnCd,
            dvcTyp: dvcTyp
        };
        let getTrailerDetailResult;
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    getTrailerDetailResult = GetTrailerDetailResult_1.default.parse(result);
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: getTrailerDetailResult
                });
            });
        });
    }
    /**
     * 特典取得
     *
     * @param {string} skhnCd 作品コード
     * @param {string} dvcTyp デバイス区分
     */
    getDigitalIncentiveList(skhnCd, dvcTyp) {
        const method = 'GetDigitalIncentiveList';
        const args = {
            skhnCd: skhnCd,
            dvcTyp: dvcTyp
        };
        let dgtlincntvInfoResults;
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
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
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: dgtlincntvInfoResults
                });
            });
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FilmService;
