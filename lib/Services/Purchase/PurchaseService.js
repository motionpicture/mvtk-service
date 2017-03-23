"use strict";
const Service_1 = require("../../Common/Service");
const Constants_1 = require("../../Common/Util/Constants");
const TicketInfoResult_1 = require("../Film/Models/TicketInfoResult");
const CreditCardInfoResult_1 = require("./Models/CreditCardInfoResult");
const DeleteIchjknrInfoIn_1 = require("./Models/DeleteIchjknrInfoIn");
const ForwardPurchaseInfoMailIn_1 = require("./Models/ForwardPurchaseInfoMailIn");
const GetGmoExecTranIn_1 = require("./Models/GetGmoExecTranIn");
const GetGmoExecTranResult_1 = require("./Models/GetGmoExecTranResult");
const GetQuestionnaireListIn_1 = require("./Models/GetQuestionnaireListIn");
const GetQuestionnaireListResult_1 = require("./Models/GetQuestionnaireListResult");
const GetShhriInfoByKeyResult_1 = require("./Models/GetShhriInfoByKeyResult");
const GetTsuryShhziInfoResult_1 = require("./Models/GetTsuryShhziInfoResult");
const GMOCancelIn_1 = require("./Models/GMOCancelIn");
const RegisterIchjknrInfoIn_1 = require("./Models/RegisterIchjknrInfoIn");
const RegisterQuestionnaireIn_1 = require("./Models/RegisterQuestionnaireIn");
const SelectIchjknrInfoResult_1 = require("./Models/SelectIchjknrInfoResult");
/**
 * PurchaseService
 * @class
 * @extends {Service}
 */
class PurchaseService extends Service_1.default {
    /**
     * 購入日時チェック
     *
     * @param {string} skhnCd 作品コード
     */
    isPurchaseDatetime(skhnCd, cb) {
        const method = 'IsPurchaseDatetime';
        const args = {
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
        const method = 'GetGmoSearchCard';
        const args = {
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
        const method = 'GetTicketTypeList';
        const args = {
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
        const method = 'SaibanKssiknrNo';
        const args = {};
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
     * @param {IGetGmoExecTranIn}  params
     */
    getGmoExecTran(params, cb) {
        const method = 'GetGmoExecTran';
        const args = new GetGmoExecTranIn_1.GetGmoExecTranIn(params);
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
        const method = 'GetGmoSaveCard';
        const args = {
            kssiknrNo: kssiknrNo,
            kiinCd: kiinCd,
            mignn: mignn
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
     * @param {IRegisterIchjknrInfoIn} args
     */
    registerIchjknr(params, cb) {
        const method = 'RegisterIchjknr';
        const args = new RegisterIchjknrInfoIn_1.RegisterIchjknrInfoIn(params);
        const message = args.toXml();
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
        const method = 'SelectIchjknr';
        const args = {
            accessIdOrkssiknrNo: accessIdOrkssiknrNo,
            kssihhTyp: kssihhTyp
        };
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, []);
            const selectIchjknrInfoResults = [];
            // // 処理結果情報がないのでRESULT_INFO.STATUSによるエラー判定不可
            if (result !== null && result.hasOwnProperty('SelectIchjknrInfoOut')) {
                if (Array.isArray(result.SelectIchjknrInfoOut)) {
                    for (const info of result.SelectIchjknrInfoOut) {
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
     * @param {string[]} accessIds
     */
    deleteIchjknr(accessIds, cb) {
        const method = 'DeleteIchjknr';
        const deleteIchjknrInfoIn = new DeleteIchjknrInfoIn_1.DeleteIchjknrInfoIn();
        deleteIchjknrInfoIn.accessIdList = accessIds;
        const message = deleteIchjknrInfoIn.toXml();
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
        const method = 'GetTsuryShhziInfo';
        const args = {
            knshknknrNo: knshknknrNo
        };
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, null);
            const getTsuryShhziInfoResults = [];
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                const infos = result.GetTsuryShhziInfoOut.KeyValueOfstringGetTsuryShhziInfoOutPz9MKw_Pl;
                if (Array.isArray(infos)) {
                    for (const info of infos) {
                        const getTsuryShhziInfoResult = GetTsuryShhziInfoResult_1.default.parse(info.Value);
                        getTsuryShhziInfoResult.knshknknrmisiNo = info.Key;
                        getTsuryShhziInfoResults.push(getTsuryShhziInfoResult);
                    }
                }
                else {
                    const getTsuryShhziInfoResult = GetTsuryShhziInfoResult_1.default.parse(infos.Value);
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
        const method = 'GetShhriInfoByKey';
        const args = {
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
     * @param {IGMOCancelIn} args
     */
    gMOCancel(params, cb) {
        const method = 'GMOCancel';
        const args = new GMOCancelIn_1.GMOCancelIn(params);
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
     * @param {IGetQuestionnaireListIn} args
     */
    getQuestionnaireList(params, cb) {
        const method = 'GetQuestionnaireList';
        const args = new GetQuestionnaireListIn_1.GetQuestionnaireListIn(params);
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
     * @param {IRegisterQuestionnaireIn} args
     */
    registerQuestionnaire(params, cb) {
        const method = 'RegisterQuestionnaire';
        const args = new RegisterQuestionnaireIn_1.RegisterQuestionnaireIn(params);
        const message = args.toXml();
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
     * @param {IForwardPurchaseInfoMailIn} params
     */
    forwardPurchaseInfoMail(params, cb) {
        const method = 'ForwardPurchaseInfoMail';
        const args = new ForwardPurchaseInfoMailIn_1.ForwardPurchaseInfoMailIn(params);
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
