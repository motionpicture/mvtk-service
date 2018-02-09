"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Service_1 = require("../../common/Service");
const Constants_1 = require("../../common/util/Constants");
const EditMemberInfoIn_1 = require("./models/EditMemberInfoIn");
const MemberInfoResult_1 = require("./models/MemberInfoResult");
class MemberInfoService extends Service_1.default {
    /**
     * 会員認証
     *
     * @param {string} kiinMladdr
     * @param {string} kiinPwd
     */
    getMemberAuthorization(kiinMladdr, kiinPwd) {
        let method = 'GetMemberAuthorization';
        let args = {
            kiinMladdr: kiinMladdr,
            kiinPwd: kiinPwd
        };
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let kiinCd = null;
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    kiinCd = result.KIIN_CD;
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: kiinCd
                });
            });
        });
    }
    /**
     * 会員情報照会
     *
     * APIにてセッションに保存されている会員情報が取得される。
     */
    getMemberInfoDetail() {
        let method = 'GetMemberInfoDetail';
        let args = {};
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let memberInfoResult = null;
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    memberInfoResult = MemberInfoResult_1.default.parse(result);
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: memberInfoResult
                });
            });
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
    editPassword(kiinCd, kiingnziPwd, kiingnzipwdhssFlg, kiinsnPwd) {
        let method = 'EditPassword';
        let args = {
            kiinCd: kiinCd,
            kiingnziPwd: kiingnziPwd,
            kiingnzipwdhssFlg: kiingnzipwdhssFlg,
            kiinsnPwd: kiinsnPwd
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
     * パスワード変更(svc)
     *
     * @param {string} kiinCd            会員コード
     * @param {string} kiingnziPwd       会員現在パスワード
     * @param {string} kiingnzipwdhssFlg 会員現在パスワード必須フラグ
     * @param {string} kiingnzipwdhssFlg 会員新パスワード
     */
    editPasswordSvc(kiinCd, kiingnziPwd, kiingnzipwdhssFlg, kiinsnPwd) {
        let method = 'EditPasswordSvc';
        let args = {
            kiinCd: kiinCd,
            kiingnziPwd: kiingnziPwd,
            kiingnzipwdhssFlg: kiingnzipwdhssFlg,
            kiinsnPwd: kiinsnPwd
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
     * パスワード再設定依頼メール送信
     *
     * @param {string} kiinMladdr 会員メールアドレス
     */
    sendPasswordResetRequestMail(kiinMladdr) {
        let method = 'SendPasswordResetRequestMail';
        let args = {
            kiinMladdr: kiinMladdr
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
     * パスワード再設定会員認証
     *
     * @param {string} psswrdhnkyUrl パスワード変更用ＵＲＬ
     * @param {string} dvcTyp        デバイス区分
     */
    getPasswordResetMemberAuthorization(psswrdhnkyUrl, dvcTyp) {
        let method = 'GetPasswordResetMemberAuthorization';
        let args = {
            psswrdhnkyUrl: psswrdhnkyUrl,
            dvcTyp: dvcTyp
        };
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let kiinCd = null;
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    kiinCd = result.KIIN_CD;
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: kiinCd
                });
            });
        });
    }
    /**
     * 会員情報更新
     *
     * @param {EditMemberInfoIn} editMemberInfoIn
     */
    editMemberInfo(params) {
        let method = 'EditMemberInfo';
        let args = new EditMemberInfoIn_1.default(params);
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
}
exports.default = MemberInfoService;
