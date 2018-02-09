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
const TicketInfoResult_1 = require("../film/models/TicketInfoResult");
const CreditCardInfoResult_1 = require("./models/CreditCardInfoResult");
const DeleteIchjknrInfoIn_1 = require("./models/DeleteIchjknrInfoIn");
const ForwardPurchaseInfoMailIn_1 = require("./models/ForwardPurchaseInfoMailIn");
const GetGmoExecTranIn_1 = require("./models/GetGmoExecTranIn");
const GetGmoExecTranResult_1 = require("./models/GetGmoExecTranResult");
const GetQuestionnaireListIn_1 = require("./models/GetQuestionnaireListIn");
const GetQuestionnaireListResult_1 = require("./models/GetQuestionnaireListResult");
const GetShhriInfoByKeyResult_1 = require("./models/GetShhriInfoByKeyResult");
const GetTsuryShhziInfoResult_1 = require("./models/GetTsuryShhziInfoResult");
const GMOCancelIn_1 = require("./models/GMOCancelIn");
const RegisterIchjknrInfoIn_1 = require("./models/RegisterIchjknrInfoIn");
const RegisterQuestionnaireIn_1 = require("./models/RegisterQuestionnaireIn");
const SelectIchjknrInfoResult_1 = require("./models/SelectIchjknrInfoResult");
/**
 * PurchaseService
 */
class PurchaseService extends Service_1.Service {
    /**
     * 購入日時チェック
     *
     * @param skhnCd 作品コード
     */
    isPurchaseDatetime(skhnCd) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'IsPurchaseDatetime';
            const args = {
                skhnCd: skhnCd
            };
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    let isOnSale = false;
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        // 鑑賞券販売フラグ 0：販売期間外/1：販売中
                        isOnSale = (result.KNSHKNHMBI_FLG === '1');
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: isOnSale
                    });
                });
            });
        });
    }
    /**
     * 代行会社カード参照呼出
     */
    getGmoSearchCard(kiinCd) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'GetGmoSearchCard';
            const args = {
                kiinCd: kiinCd
            };
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    let creditCardInfoResult;
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS && result.CRDJHUM_FLG !== '0') {
                        if (Array.isArray(result.CRDTCRD_INFO.CrdtcrdInfo)) {
                            creditCardInfoResult = CreditCardInfoResult_1.CreditCardInfoResult.parse(result.CRDTCRD_INFO.CrdtcrdInfo[0]);
                        }
                        else {
                            creditCardInfoResult = CreditCardInfoResult_1.CreditCardInfoResult.parse(result.CRDTCRD_INFO.CrdtcrdInfo);
                        }
                        resolve({
                            response: response,
                            result: creditCardInfoResult
                        });
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                });
            });
        });
    }
    /**
     * 券種情報検索
     */
    getTicketTypeList(skhnCd, dvcTyp) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'GetTicketTypeList';
            const args = {
                skhnCd: skhnCd,
                dvcTyp: dvcTyp
            };
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    let ticketInfoResult;
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        ticketInfoResult = TicketInfoResult_1.TicketInfoResult.parse(result);
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
     * 決済管理番号採番
     *
     * 決済エラーの処理はしない。
     * 決済エラー関係のフィールドはあるが、値は返却されない。
     *
     * @return string 決済管理番号
     */
    saibanKssiknrNo() {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'SaibanKssiknrNo';
            const args = {};
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    let kssiknrNo;
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        // 取引ID（ACCESS_ID）、取引パスワード（ACCESS_PWD）は使用しない。値も返却されない。
                        kssiknrNo = result.KSSIKNR_NO;
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: kssiknrNo
                    });
                });
            });
        });
    }
    /**
     * 代行会社決済実行呼出
     *
     * @param kssiknrNo   決済管理番号
     * @param kssihhTyp  決済方法区分
     * @param accessId        取引ID
     * @param accessPwd  取引パスワード
     * @param Array<string>  params
     */
    getGmoExecTran(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'GetGmoExecTran';
            const args = new GetGmoExecTranIn_1.GetGmoExecTranIn(params);
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    let getGmoExecTranResult;
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        getGmoExecTranResult = GetGmoExecTranResult_1.GetGmoExecTranResult.parse(result);
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: getGmoExecTranResult
                    });
                });
            });
        });
    }
    /**
     * 代行会社カード登録更新呼出
     *
     * @param kssiknrNo       決済管理番号
     * @param kiinCd          会員コード
     * @param mignn  クレジットカード名義人
     */
    getGmoSaveCard(kssiknrNo, kiinCd, mignn) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'GetGmoSaveCard';
            const args = {
                kssiknrNo: kssiknrNo,
                kiinCd: kiinCd,
                mignn: mignn
            };
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    let isSuccess = false;
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
     * 一時管理テーブル（情報）登録
     */
    registerIchjknr(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'RegisterIchjknr';
            const args = new RegisterIchjknrInfoIn_1.RegisterIchjknrInfoIn(params);
            const message = args.toXml();
            return new Promise((resolve, reject) => {
                this.call(method, message, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    let isSuccess = false;
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
     * 一時管理テーブル（情報）取得
     */
    selectIchjknr(kssihhTyp, accessIdOrkssiknrNo) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'SelectIchjknr';
            const args = {
                accessIdOrkssiknrNo: accessIdOrkssiknrNo,
                kssihhTyp: kssihhTyp
            };
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    const selectIchjknrInfoResults = [];
                    // 処理結果情報がないのでRESULT_INFO.STATUSによるエラー判定不可
                    if (result !== null && result.hasOwnProperty('SelectIchjknrInfoOut')) {
                        if (Array.isArray(result.SelectIchjknrInfoOut)) {
                            for (const info of result.SelectIchjknrInfoOut) {
                                selectIchjknrInfoResults.push(SelectIchjknrInfoResult_1.SelectIchjknrInfoResult.parse(info));
                            }
                        }
                        else {
                            selectIchjknrInfoResults.push(SelectIchjknrInfoResult_1.SelectIchjknrInfoResult.parse(result.SelectIchjknrInfoOut));
                        }
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: selectIchjknrInfoResults
                    });
                });
            });
        });
    }
    /**
     * 一時管理テーブル（情報）削除
     */
    deleteIchjknr(accessIds) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'DeleteIchjknr';
            const deleteIchjknrInfoIn = new DeleteIchjknrInfoIn_1.DeleteIchjknrInfoIn();
            deleteIchjknrInfoIn.accessIdList = accessIds;
            const message = deleteIchjknrInfoIn.toXml();
            return new Promise((resolve, reject) => {
                this.call(method, message, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    let isSuccess = false;
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
     * 手数料・消費税情報取得
     *
     * @param knshknknrNo 鑑賞券管理番号
     */
    getTsuryShhziInfo(knshknknrNo) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'GetTsuryShhziInfo';
            const args = {
                knshknknrNo: knshknknrNo
            };
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    const getTsuryShhziInfoResults = [];
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        const infos = result.GetTsuryShhziInfoOut.KeyValueOfstringGetTsuryShhziInfoOutPz9MKw_Pl;
                        if (Array.isArray(infos)) {
                            for (const info of infos) {
                                const getTsuryShhziInfoResult = GetTsuryShhziInfoResult_1.GetTsuryShhziInfoResult.parse(info.Value);
                                getTsuryShhziInfoResult.knshknknrmisiNo = info.Key;
                                getTsuryShhziInfoResults.push(getTsuryShhziInfoResult);
                            }
                        }
                        else {
                            const getTsuryShhziInfoResult = GetTsuryShhziInfoResult_1.GetTsuryShhziInfoResult.parse(infos.Value);
                            getTsuryShhziInfoResult.knshknknrmisiNo = infos.Key;
                            getTsuryShhziInfoResults.push(getTsuryShhziInfoResult);
                        }
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: getTsuryShhziInfoResults
                    });
                });
            });
        });
    }
    /**
     * 支払先情報取得
     *
     * @param knshknknrNo 鑑賞券管理番号
     */
    getShhriInfoByKey(knshknknrNo) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'GetShhriInfoByKey';
            const args = {
                knshknknrNo: knshknknrNo
            };
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    let getShhriInfoByKeyResult;
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        getShhriInfoByKeyResult = GetShhriInfoByKeyResult_1.GetShhriInfoByKeyResult.parse(result);
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: getShhriInfoByKeyResult
                    });
                });
            });
        });
    }
    /**
     * 代行会社決済取消呼出
     */
    gMOCancel(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'GMOCancel';
            const args = new GMOCancelIn_1.GMOCancelIn(params);
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    let isSuccess = false;
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
     * アンケート設問検索
     */
    getQuestionnaireList(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'GetQuestionnaireList';
            const args = new GetQuestionnaireListIn_1.GetQuestionnaireListIn(params);
            let getQuestionnaireListResult;
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        getQuestionnaireListResult = GetQuestionnaireListResult_1.GetQuestionnaireListResult.parse(result);
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: getQuestionnaireListResult
                    });
                });
            });
        });
    }
    /**
     * アンケート設問登録
     */
    registerQuestionnaire(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'RegisterQuestionnaire';
            const args = new RegisterQuestionnaireIn_1.RegisterQuestionnaireIn(params);
            const message = args.toXml();
            let isSuccess = false;
            return new Promise((resolve, reject) => {
                this.call(method, message, (err, response, result) => {
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
     * 購入管理番号メール転送
     */
    forwardPurchaseInfoMail(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'ForwardPurchaseInfoMail';
            const args = new ForwardPurchaseInfoMailIn_1.ForwardPurchaseInfoMailIn(params);
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
}
exports.PurchaseService = PurchaseService;
