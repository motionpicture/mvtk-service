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
const BnnrInfoResult_1 = require("./models/BnnrInfoResult");
const DgtlincntvInfoResult_1 = require("./models/DgtlincntvInfoResult");
const FilmResult_1 = require("./models/FilmResult");
const GetTrailerDetailResult_1 = require("./models/GetTrailerDetailResult");
const TicketInfoResult_1 = require("./models/TicketInfoResult");
/**
 * FilmService
 */
class FilmService extends Service_1.Service {
    /**
     * 作品詳細情報照会
     * @param skhnCd 作品コード
     * @param dvcTyp デバイス区分
     */
    getFilmDetail(skhnCd, dvcTyp) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'GetFilmDetail';
            const args = {
                skhnCd: skhnCd,
                dvcTyp: dvcTyp
            };
            let filmResult;
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        filmResult = FilmResult_1.FilmResult.parse(result);
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: filmResult
                    });
                });
            });
        });
    }
    /**
     * トップページ作品検索
     */
    getFilmTopPage(dvcTyp) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'GetFilmTopPage';
            const args = {
                dvcTyp: dvcTyp
            };
            const filmResults = [];
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        if (Array.isArray(result.SKHN_INFO.SkhnInfo)) {
                            for (const skhnInfo of result.SKHN_INFO.SkhnInfo) {
                                filmResults.push(FilmResult_1.FilmResult.parse(skhnInfo));
                            }
                        }
                        else {
                            filmResults.push(FilmResult_1.FilmResult.parse(result.SKHN_INFO.SkhnInfo));
                        }
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: filmResults
                    });
                });
            });
        });
    }
    /**
     * 鑑賞券情報検索
     *
     * @param skhnCd 作品コード
     */
    getTicketInfoList(skhnCd) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'GetTicketInfoList';
            const args = {
                skhnCd: skhnCd
            };
            let ticketInfoResult;
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        ticketInfoResult = [];
                        if (Array.isArray(result.KNSHKN_INFO.KnshknInfo)) {
                            for (const knshknInfo of result.KNSHKN_INFO.KnshknInfo) {
                                ticketInfoResult.push(TicketInfoResult_1.TicketInfoResult.parse(knshknInfo));
                            }
                        }
                        else {
                            ticketInfoResult.push(TicketInfoResult_1.TicketInfoResult.parse(result.KNSHKN_INFO.KnshknInfo));
                        }
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: ticketInfoResult
                    });
                });
            });
        });
    }
    /**
     * バナーリスト取得
     *
     * @param skhnCd 作品コード
     * @param dvcTyp デバイス区分
     */
    getBannerList(skhnCd, dvcTyp) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'GetBannerList';
            const args = {
                skhnCd: skhnCd,
                dvcTyp: dvcTyp
            };
            let bnnrInfoResults;
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS
                        || result.RESULT_INFO.STATUS === 'L001') {
                        bnnrInfoResults = [];
                        if (result.BNNR_INFO !== null && result.BNNR_INFO.hasOwnProperty('BnnrInfo')) {
                            if (Array.isArray(result.BNNR_INFO.BnnrInfo)) {
                                for (const info of result.BNNR_INFO.BnnrInfo) {
                                    bnnrInfoResults.push(BnnrInfoResult_1.BnnrInfoResult.parse(info));
                                }
                            }
                            else {
                                bnnrInfoResults.push(BnnrInfoResult_1.BnnrInfoResult.parse(result.BNNR_INFO.BnnrInfo));
                            }
                        }
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: bnnrInfoResults
                    });
                });
            });
        });
    }
    /**
     * 予告編取得
     *
     * @param skhnCd 作品コード
     * @param dvcTyp デバイス区分
     */
    getTrailerDetail(skhnCd, dvcTyp) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'GetTrailerDetail';
            const args = {
                skhnCd: skhnCd,
                dvcTyp: dvcTyp
            };
            let getTrailerDetailResult;
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        getTrailerDetailResult = GetTrailerDetailResult_1.GetTrailerDetailResult.parse(result);
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: getTrailerDetailResult
                    });
                });
            });
        });
    }
    /**
     * 特典取得
     *
     * @param skhnCd 作品コード
     * @param dvcTyp デバイス区分
     */
    getDigitalIncentiveList(skhnCd, dvcTyp) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'GetDigitalIncentiveList';
            const args = {
                skhnCd: skhnCd,
                dvcTyp: dvcTyp
            };
            let dgtlincntvInfoResults;
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS
                        || result.RESULT_INFO.STATUS === 'L001') {
                        dgtlincntvInfoResults = [];
                        if (result.DGTLINCNTV_INFO !== null && result.DGTLINCNTV_INFO.hasOwnProperty('DgtlincntvInfo')) {
                            if (Array.isArray(result.DGTLINCNTV_INFO.DgtlincntvInfo)) {
                                for (const info of result.DGTLINCNTV_INFO.DgtlincntvInfo) {
                                    dgtlincntvInfoResults.push(DgtlincntvInfoResult_1.DgtlincntvInfoResult.parse(info));
                                }
                            }
                            else {
                                dgtlincntvInfoResults.push(DgtlincntvInfoResult_1.DgtlincntvInfoResult.parse(result.DGTLINCNTV_INFO.DgtlincntvInfo));
                            }
                        }
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: dgtlincntvInfoResults
                    });
                });
            });
        });
    }
}
exports.FilmService = FilmService;
