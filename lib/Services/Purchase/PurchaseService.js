"use strict";
const Service_1 = require("../../common/Service");
const Constants_1 = require("../../common/util/Constants");
const CreditCardInfoResult_1 = require("./Models/CreditCardInfoResult");
const GetGmoExecTranIn_1 = require("./Models/GetGmoExecTranIn");
const GetGmoExecTranResult_1 = require("./Models/GetGmoExecTranResult");
const RegisterIchjknrInfoIn_1 = require("./Models/RegisterIchjknrInfoIn");
const DeleteIchjknrInfoIn_1 = require("./Models/DeleteIchjknrInfoIn");
const SelectIchjknrInfoResult_1 = require("./Models/SelectIchjknrInfoResult");
const GetShhriInfoByKeyResult_1 = require("./Models/GetShhriInfoByKeyResult");
const GetTsuryShhziInfoResult_1 = require("./Models/GetTsuryShhziInfoResult");
const GMOCancelIn_1 = require("./Models/GMOCancelIn");
const TicketInfoResult_1 = require("../Film/Models/TicketInfoResult");
const RegisterQuestionnaireIn_1 = require("./Models/RegisterQuestionnaireIn");
const GetQuestionnaireListIn_1 = require("./Models/GetQuestionnaireListIn");
const GetQuestionnaireListResult_1 = require("./Models/GetQuestionnaireListResult");
const ForwardPurchaseInfoMailIn_1 = require("./Models/ForwardPurchaseInfoMailIn");
class PurchaseService extends Service_1.default {
    /**
     * 購入日時チェック
     *
     * @param {string} skhnCd 作品コード
     */
    isPurchaseDatetime(skhnCd, cb) {
        let method = 'IsPurchaseDatetime';
        let args = {
            skhnCd: skhnCd
        };
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, false);
            let isOnSale = false;
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                // 鑑賞券販売フラグ 0：販売期間外/1：販売中
                isOnSale = (result.KNSHKNHMBI_FLG === '1');
            }
            cb(err, response, isOnSale);
        });
    }
    /**
     * 代行会社カード参照呼出
     *
     * @param {string} kiinCd
     */
    getGmoSearchCard(kiinCd, cb) {
        let method = 'GetGmoSearchCard';
        let args = {
            kiinCd: kiinCd
        };
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, null);
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
            cb(err, response, creditCardInfoResult);
        });
    }
    /**
     * 券種情報検索
     *
     * @param {string} skhnCd
     * @param {string} dvcTyp
     */
    getTicketTypeList(skhnCd, dvcTyp, cb) {
        let method = 'GetTicketTypeList';
        let args = {
            skhnCd: skhnCd,
            dvcTyp: dvcTyp
        };
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, null);
            let ticketInfoResult = null;
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                ticketInfoResult = TicketInfoResult_1.default.parse(result);
            }
            cb(err, response, ticketInfoResult);
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
    saibanKssiknrNo(cb) {
        let method = 'SaibanKssiknrNo';
        let args = {};
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, null);
            let kssiknrNo = null;
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                // 取引ID（ACCESS_ID）、取引パスワード（ACCESS_PWD）は使用しない。値も返却されない。
                kssiknrNo = result.KSSIKNR_NO;
            }
            cb(err, response, kssiknrNo);
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
    getGmoExecTran(params, cb) {
        let method = 'GetGmoExecTran';
        let args = new GetGmoExecTranIn_1.default(params);
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, null);
            let getGmoExecTranResult = null;
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                getGmoExecTranResult = GetGmoExecTranResult_1.default.parse(result);
            }
            cb(err, response, getGmoExecTranResult);
        });
    }
    /**
     * 代行会社カード登録更新呼出
     *
     * @param {string} kssiknrNo       決済管理番号
     * @param {string} kiinCd          会員コード
     * @param {string} mignn  クレジットカード名義人
     */
    getGmoSaveCard(kssiknrNo, kiinCd, mignn, cb) {
        let method = 'GetGmoSaveCard';
        let args = {
            kssiknrNo: kssiknrNo,
            kiinCd: kiinCd,
            mignn: mignn,
        };
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, false);
            let isSuccess = false;
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                isSuccess = true;
            }
            cb(err, response, isSuccess);
        });
    }
    /**
     * 一時管理テーブル（情報）登録
     *
     * @param {RegisterIchjknrInfoIn} args
     */
    registerIchjknr(params, cb) {
        let method = 'RegisterIchjknr';
        let args = new RegisterIchjknrInfoIn_1.default(params);
        let message = args.toXml();
        this.call(method, message, (err, response, result) => {
            if (err)
                return cb(err, response, false);
            let isSuccess = false;
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                isSuccess = true;
            }
            cb(err, response, isSuccess);
        });
    }
    /**
     * 一時管理テーブル（情報）取得
     *
     * @param {string} kssihhTyp    決済方法区分
     * @param {string} accessIdOrkssiknrNo 決済管理番号or取引ID。クレジットカード決済の場合のみ、取引ID
     */
    selectIchjknr(kssihhTyp, accessIdOrkssiknrNo, cb) {
        let method = 'SelectIchjknr';
        let args = {
            accessIdOrkssiknrNo: accessIdOrkssiknrNo,
            kssihhTyp: kssihhTyp
        };
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, []);
            let selectIchjknrInfoResults = [];
            // // 処理結果情報がないのでRESULT_INFO.STATUSによるエラー判定不可
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
            cb(err, response, selectIchjknrInfoResults);
        });
    }
    /**
     * 一時管理テーブル（情報）削除
     *
     * @param {Array<string>} accessIds
     */
    deleteIchjknr(accessIds, cb) {
        let method = 'DeleteIchjknr';
        let deleteIchjknrInfoIn = new DeleteIchjknrInfoIn_1.default();
        deleteIchjknrInfoIn.accessIdList = accessIds;
        let message = deleteIchjknrInfoIn.toXml();
        this.call(method, message, (err, response, result) => {
            if (err)
                return cb(err, response, false);
            let isSuccess = false;
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                isSuccess = true;
            }
            cb(err, response, isSuccess);
        });
    }
    /**
     * 手数料・消費税情報取得
     *
     * @param {string} knshknknrNo 鑑賞券管理番号
     */
    getTsuryShhziInfo(knshknknrNo, cb) {
        let method = 'GetTsuryShhziInfo';
        let args = {
            knshknknrNo: knshknknrNo
        };
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, null);
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
            cb(err, response, getTsuryShhziInfoResults);
        });
    }
    /**
     * 支払先情報取得
     *
     * @param {string} knshknknrNo 鑑賞券管理番号
     */
    getShhriInfoByKey(knshknknrNo, cb) {
        let method = 'GetShhriInfoByKey';
        let args = {
            knshknknrNo: knshknknrNo
        };
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, null);
            let getShhriInfoByKeyResult = null;
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                getShhriInfoByKeyResult = GetShhriInfoByKeyResult_1.default.parse(result);
            }
            cb(err, response, getShhriInfoByKeyResult);
        });
    }
    /**
     * 代行会社決済取消呼出
     *
     * @param {GMOCancelIn} args
     */
    gMOCancel(params, cb) {
        let method = 'GMOCancel';
        let args = new GMOCancelIn_1.default(params);
        this.call(method, args.toXml(), (err, response, result) => {
            if (err)
                return cb(err, response, null);
            let isSuccess = false;
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                isSuccess = true;
            }
            cb(err, response, isSuccess);
        });
    }
    /**
     * アンケート設問検索
     *
     * @param {GetQuestionnaireListIn} args
     */
    getQuestionnaireList(params, cb) {
        let method = 'GetQuestionnaireList';
        let args = new GetQuestionnaireListIn_1.default(params);
        let getQuestionnaireListResult;
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, getQuestionnaireListResult);
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                getQuestionnaireListResult = GetQuestionnaireListResult_1.default.parse(result);
            }
            cb(err, response, getQuestionnaireListResult);
        });
    }
    /**
     * アンケート設問登録
     *
     * @param {RegisterQuestionnaireIn} args
     */
    registerQuestionnaire(params, cb) {
        let method = 'RegisterQuestionnaire';
        let args = new RegisterQuestionnaireIn_1.default(params);
        let message = args.toXml();
        let isSuccess = false;
        this.call(method, message, (err, response, result) => {
            if (err)
                return cb(err, response, isSuccess);
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                isSuccess = true;
            }
            cb(err, response, isSuccess);
        });
    }
    /**
     * 購入管理番号メール転送
     *
     * @param {Object} params
     */
    forwardPurchaseInfoMail(params, cb) {
        let method = 'ForwardPurchaseInfoMail';
        let args = new ForwardPurchaseInfoMailIn_1.default(params);
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
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PurchaseService;
