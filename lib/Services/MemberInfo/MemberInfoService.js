"use strict";
const Service_1 = require("../../Common/Service");
const Constants_1 = require("../../Common/Util/Constants");
const EditMemberInfoIn_1 = require("./Models/EditMemberInfoIn");
const MemberInfoResult_1 = require("./Models/MemberInfoResult");
/**
 * MemberInfoService
 * @class
 * @extends {Service}
 */
class MemberInfoService extends Service_1.default {
    /**
     * 会員認証
     *
     * @param {string} kiinMladdr
     * @param {string} kiinPwd
     */
    getMemberAuthorization(kiinMladdr, kiinPwd, cb) {
        const method = 'GetMemberAuthorization';
        const args = {
            kiinMladdr: kiinMladdr,
            kiinPwd: kiinPwd
        };
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, null);
            let kiinCd = null;
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                kiinCd = result.KIIN_CD;
            }
            cb(err, response, kiinCd);
        });
    }
    /**
     * 会員情報照会
     *
     * APIにてセッションに保存されている会員情報が取得される。
     */
    getMemberInfoDetail(cb) {
        const method = 'GetMemberInfoDetail';
        const args = {};
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, null);
            let memberInfoResult = null;
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                memberInfoResult = MemberInfoResult_1.default.parse(result);
            }
            cb(err, response, memberInfoResult);
        });
    }
    /**
     * パスワード変更
     *
     * @param {string} kiinCd            会員コード
     * @param {string} kiingnziPwd       会員現在パスワード
     * @param {string} kiingnzipwdhssFlg 会員現在パスワード必須フラグ
     * @param {string} kiingnzipwdhssFlg 会員新パスワード
     */
    editPassword(kiinCd, kiingnziPwd, kiingnzipwdhssFlg, kiinsnPwd, cb) {
        const method = 'EditPassword';
        const args = {
            kiinCd: kiinCd,
            kiingnziPwd: kiingnziPwd,
            kiingnzipwdhssFlg: kiingnzipwdhssFlg,
            kiinsnPwd: kiinsnPwd
        };
        this.call(method, args, (err, response, result) => {
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
     * パスワード変更(svc)
     *
     * @param {string} kiinCd            会員コード
     * @param {string} kiingnziPwd       会員現在パスワード
     * @param {string} kiingnzipwdhssFlg 会員現在パスワード必須フラグ
     * @param {string} kiingnzipwdhssFlg 会員新パスワード
     */
    editPasswordSvc(kiinCd, kiingnziPwd, kiingnzipwdhssFlg, kiinsnPwd, cb) {
        const method = 'EditPasswordSvc';
        const args = {
            kiinCd: kiinCd,
            kiingnziPwd: kiingnziPwd,
            kiingnzipwdhssFlg: kiingnzipwdhssFlg,
            kiinsnPwd: kiinsnPwd
        };
        this.call(method, args, (err, response, result) => {
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
     * パスワード再設定依頼メール送信
     *
     * @param {string} kiinMladdr 会員メールアドレス
     */
    sendPasswordResetRequestMail(kiinMladdr, cb) {
        const method = 'SendPasswordResetRequestMail';
        const args = {
            kiinMladdr: kiinMladdr
        };
        this.call(method, args, (err, response, result) => {
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
     * パスワード再設定会員認証
     *
     * @param {string} psswrdhnkyUrl パスワード変更用ＵＲＬ
     * @param {string} dvcTyp        デバイス区分
     */
    getPasswordResetMemberAuthorization(psswrdhnkyUrl, dvcTyp, cb) {
        const method = 'GetPasswordResetMemberAuthorization';
        const args = {
            psswrdhnkyUrl: psswrdhnkyUrl,
            dvcTyp: dvcTyp,
        };
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, null);
            let kiinCd = null;
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                kiinCd = result.KIIN_CD;
            }
            cb(err, response, kiinCd);
        });
    }
    /**
     * 会員情報更新
     *
     * @param {IEditMemberInfoIn} editMemberInfoIn
     */
    editMemberInfo(params, cb) {
        const method = 'EditMemberInfo';
        const args = new EditMemberInfoIn_1.EditMemberInfoIn(params);
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, null);
            let isSuccess = false;
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                isSuccess = true;
            }
            cb(err, response, isSuccess);
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MemberInfoService;
