"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Service_1 = require("../../common/Service");
const Constants_1 = require("../../common/util/Constants");
const CreditCardInfoResult_1 = require("./models/CreditCardInfoResult");
const GetGmoExecTranIn_1 = require("./models/GetGmoExecTranIn");
const GetGmoExecTranResult_1 = require("./models/GetGmoExecTranResult");
const RegisterIchjknrInfoIn_1 = require("./models/RegisterIchjknrInfoIn");
const DeleteIchjknrInfoIn_1 = require("./models/DeleteIchjknrInfoIn");
const SelectIchjknrInfoResult_1 = require("./models/SelectIchjknrInfoResult");
const GetShhriInfoByKeyResult_1 = require("./models/GetShhriInfoByKeyResult");
const GetTsuryShhziInfoResult_1 = require("./models/GetTsuryShhziInfoResult");
const GMOCancelIn_1 = require("./models/GMOCancelIn");
const TicketInfoResult_1 = require("../Film/models/TicketInfoResult");
const RegisterQuestionnaireIn_1 = require("./models/RegisterQuestionnaireIn");
const GetQuestionnaireListIn_1 = require("./models/GetQuestionnaireListIn");
const GetQuestionnaireListResult_1 = require("./models/GetQuestionnaireListResult");
const ForwardPurchaseInfoMailIn_1 = require("./models/ForwardPurchaseInfoMailIn");
class PurchaseService extends Service_1.default {
    /**
     * 購入日時チェック
     *
     * @param {string} skhnCd 作品コード
     */
    isPurchaseDatetime(skhnCd) {
        let method = 'IsPurchaseDatetime';
        let args = {
            skhnCd: skhnCd
        };
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let isOnSale = false;
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    // 鑑賞券販売フラグ 0：販売期間外/1：販売中
                    isOnSale = (result.KNSHKNHMBI_FLG === '1');
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: isOnSale
                });
            });
        });
    }
    /**
     * 代行会社カード参照呼出
     *
     * @param {string} kiinCd
     */
    getGmoSearchCard(kiinCd) {
        let method = 'GetGmoSearchCard';
        let args = {
            kiinCd: kiinCd
        };
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let creditCardInfoResult = null;
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    if (result.CRDJHUM_FLG !== '0') {
                        if (Array.isArray(result.CRDTCRD_INFO.CrdtcrdInfo)) {
                            creditCardInfoResult = CreditCardInfoResult_1.default.parse(result.CRDTCRD_INFO.CrdtcrdInfo[0]);
                        }
                        else {
                            creditCardInfoResult = CreditCardInfoResult_1.default.parse(result.CRDTCRD_INFO.CrdtcrdInfo);
                        }
                    }
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: creditCardInfoResult
                });
            });
        });
    }
    /**
     * 券種情報検索
     *
     * @param {string} skhnCd
     * @param {string} dvcTyp
     */
    getTicketTypeList(skhnCd, dvcTyp) {
        let method = 'GetTicketTypeList';
        let args = {
            skhnCd: skhnCd,
            dvcTyp: dvcTyp
        };
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let ticketInfoResult = null;
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    ticketInfoResult = TicketInfoResult_1.default.parse(result);
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
     * 決済管理番号採番
     *
     * 決済エラーの処理はしない。
     * 決済エラー関係のフィールドはあるが、値は返却されない。
     *
     * @return string 決済管理番号
     */
    saibanKssiknrNo() {
        let method = 'SaibanKssiknrNo';
        let args = {};
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let kssiknrNo = null;
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    // 取引ID（ACCESS_ID）、取引パスワード（ACCESS_PWD）は使用しない。値も返却されない。
                    kssiknrNo = result.KSSIKNR_NO;
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: kssiknrNo
                });
            });
        });
    }
    /**
     * 代行会社決済実行呼出
     *
     * @param {string} kssiknrNo   決済管理番号
     * @param {string} kssihhTyp  決済方法区分
     * @param {string} accessId        取引ID
     * @param {string} accessPwd  取引パスワード
     * @param Array<string>  params
     */
    getGmoExecTran(params) {
        let method = 'GetGmoExecTran';
        let args = new GetGmoExecTranIn_1.default(params);
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let getGmoExecTranResult = null;
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    getGmoExecTranResult = GetGmoExecTranResult_1.default.parse(result);
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: getGmoExecTranResult
                });
            });
        });
    }
    /**
     * 代行会社カード登録更新呼出
     *
     * @param {string} kssiknrNo       決済管理番号
     * @param {string} kiinCd          会員コード
     * @param {string} mignn  クレジットカード名義人
     */
    getGmoSaveCard(kssiknrNo, kiinCd, mignn) {
        let method = 'GetGmoSaveCard';
        let args = {
            kssiknrNo: kssiknrNo,
            kiinCd: kiinCd,
            mignn: mignn,
        };
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let isSuccess = false;
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
     * 一時管理テーブル（情報）登録
     *
     * @param {RegisterIchjknrInfoIn} args
     */
    registerIchjknr(params) {
        let method = 'RegisterIchjknr';
        let args = new RegisterIchjknrInfoIn_1.default(params);
        let message = args.toXml();
        return new Promise((resolve, reject) => {
            this.call(method, message, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let isSuccess = false;
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
     * 一時管理テーブル（情報）取得
     *
     * @param {string} kssihhTyp    決済方法区分
     * @param {string} accessIdOrkssiknrNo 決済管理番号or取引ID。クレジットカード決済の場合のみ、取引ID
     */
    selectIchjknr(kssihhTyp, accessIdOrkssiknrNo) {
        let method = 'SelectIchjknr';
        let args = {
            accessIdOrkssiknrNo: accessIdOrkssiknrNo,
            kssihhTyp: kssihhTyp
        };
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let selectIchjknrInfoResults = [];
                // 処理結果情報がないのでRESULT_INFO.STATUSによるエラー判定不可
                if (result !== null && result.hasOwnProperty('SelectIchjknrInfoOut')) {
                    if (Array.isArray(result.SelectIchjknrInfoOut)) {
                        for (let info of result.SelectIchjknrInfoOut) {
                            selectIchjknrInfoResults.push(SelectIchjknrInfoResult_1.default.parse(info));
                        }
                    }
                    else {
                        selectIchjknrInfoResults.push(SelectIchjknrInfoResult_1.default.parse(result.SelectIchjknrInfoOut));
                    }
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: selectIchjknrInfoResults
                });
            });
        });
    }
    /**
     * 一時管理テーブル（情報）削除
     *
     * @param {Array<string>} accessIds
     */
    deleteIchjknr(accessIds) {
        let method = 'DeleteIchjknr';
        let deleteIchjknrInfoIn = new DeleteIchjknrInfoIn_1.default();
        deleteIchjknrInfoIn.accessIdList = accessIds;
        let message = deleteIchjknrInfoIn.toXml();
        return new Promise((resolve, reject) => {
            this.call(method, message, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let isSuccess = false;
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
     * 手数料・消費税情報取得
     *
     * @param {string} knshknknrNo 鑑賞券管理番号
     */
    getTsuryShhziInfo(knshknknrNo) {
        let method = 'GetTsuryShhziInfo';
        let args = {
            knshknknrNo: knshknknrNo
        };
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let getTsuryShhziInfoResults = [];
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    let infos = result.GetTsuryShhziInfoOut.KeyValueOfstringGetTsuryShhziInfoOutPz9MKw_Pl;
                    if (Array.isArray(infos)) {
                        for (let info of infos) {
                            let getTsuryShhziInfoResult = GetTsuryShhziInfoResult_1.default.parse(info.Value);
                            getTsuryShhziInfoResult.knshknknrmisiNo = info.Key;
                            getTsuryShhziInfoResults.push(getTsuryShhziInfoResult);
                        }
                    }
                    else {
                        let getTsuryShhziInfoResult = GetTsuryShhziInfoResult_1.default.parse(infos.Value);
                        getTsuryShhziInfoResult.knshknknrmisiNo = infos.Key;
                        getTsuryShhziInfoResults.push(getTsuryShhziInfoResult);
                    }
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: getTsuryShhziInfoResults
                });
            });
        });
    }
    /**
     * 支払先情報取得
     *
     * @param {string} knshknknrNo 鑑賞券管理番号
     */
    getShhriInfoByKey(knshknknrNo) {
        let method = 'GetShhriInfoByKey';
        let args = {
            knshknknrNo: knshknknrNo
        };
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let getShhriInfoByKeyResult = null;
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    getShhriInfoByKeyResult = GetShhriInfoByKeyResult_1.default.parse(result);
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: getShhriInfoByKeyResult
                });
            });
        });
    }
    /**
     * 代行会社決済取消呼出
     *
     * @param {GMOCancelIn} args
     */
    gMOCancel(params) {
        let method = 'GMOCancel';
        let args = new GMOCancelIn_1.default(params);
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let isSuccess = false;
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
     * アンケート設問検索
     *
     * @param {GetQuestionnaireListIn} args
     */
    getQuestionnaireList(params) {
        let method = 'GetQuestionnaireList';
        let args = new GetQuestionnaireListIn_1.default(params);
        let getQuestionnaireListResult;
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    getQuestionnaireListResult = GetQuestionnaireListResult_1.default.parse(result);
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: getQuestionnaireListResult
                });
            });
        });
    }
    /**
     * アンケート設問登録
     *
     * @param {RegisterQuestionnaireIn} args
     */
    registerQuestionnaire(params) {
        let method = 'RegisterQuestionnaire';
        let args = new RegisterQuestionnaireIn_1.default(params);
        let message = args.toXml();
        let isSuccess = false;
        return new Promise((resolve, reject) => {
            this.call(method, message, (err, response, result) => {
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
     * 購入管理番号メール転送
     *
     * @param {Object} params
     */
    forwardPurchaseInfoMail(params) {
        let method = 'ForwardPurchaseInfoMail';
        let args = new ForwardPurchaseInfoMailIn_1.default(params);
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
}
exports.default = PurchaseService;
