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
const EditMemberInfoIn_1 = require("./models/EditMemberInfoIn");
const MemberInfoResult_1 = require("./models/MemberInfoResult");
/**
 * MemberInfoService
 */
class MemberInfoService extends Service_1.Service {
    /**
     * 会員認証
     */
    getMemberAuthorization(kiinMladdr, kiinPwd) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'GetMemberAuthorization';
            const args = {
                kiinMladdr: kiinMladdr,
                kiinPwd: kiinPwd
            };
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, _response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    let kiinCd = null;
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        kiinCd = result.KIIN_CD;
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: result,
                        result: kiinCd
                    });
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
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'GetMemberInfoDetail';
            const args = {};
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, _response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    let memberInfoResult = null;
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        memberInfoResult = MemberInfoResult_1.MemberInfoResult.parse(result);
                    }
                    resolve({
                        response: result,
                        result: memberInfoResult
                    });
                });
            });
        });
    }
    /**
     * パスワード変更
     *
     * @param kiinCd            会員コード
     * @param kiingnziPwd       会員現在パスワード
     * @param kiingnzipwdhssFlg 会員現在パスワード必須フラグ
     * @param kiingnzipwdhssFlg 会員新パスワード
     */
    editPassword(kiinCd, kiingnziPwd, kiingnzipwdhssFlg, kiinsnPwd) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'EditPassword';
            const args = {
                kiinCd: kiinCd,
                kiingnziPwd: kiingnziPwd,
                kiingnzipwdhssFlg: kiingnzipwdhssFlg,
                kiinsnPwd: kiinsnPwd
            };
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, _response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    let isSuccess = false;
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        isSuccess = true;
                    }
                    resolve({
                        response: result,
                        result: isSuccess
                    });
                });
            });
        });
    }
    /**
     * パスワード変更(svc)
     *
     * @param kiinCd            会員コード
     * @param kiingnziPwd       会員現在パスワード
     * @param kiingnzipwdhssFlg 会員現在パスワード必須フラグ
     * @param kiingnzipwdhssFlg 会員新パスワード
     */
    editPasswordSvc(kiinCd, kiingnziPwd, kiingnzipwdhssFlg, kiinsnPwd) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'EditPasswordSvc';
            const args = {
                kiinCd: kiinCd,
                kiingnziPwd: kiingnziPwd,
                kiingnzipwdhssFlg: kiingnzipwdhssFlg,
                kiinsnPwd: kiinsnPwd
            };
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, _response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    let isSuccess = false;
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        isSuccess = true;
                    }
                    resolve({
                        response: result,
                        result: isSuccess
                    });
                });
            });
        });
    }
    /**
     * パスワード再設定依頼メール送信
     *
     * @param kiinMladdr 会員メールアドレス
     */
    sendPasswordResetRequestMail(kiinMladdr) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'SendPasswordResetRequestMail';
            const args = {
                kiinMladdr: kiinMladdr
            };
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, _response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    let isSuccess = false;
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        isSuccess = true;
                    }
                    resolve({
                        response: result,
                        result: isSuccess
                    });
                });
            });
        });
    }
    /**
     * パスワード再設定会員認証
     *
     * @param psswrdhnkyUrl パスワード変更用ＵＲＬ
     * @param dvcTyp        デバイス区分
     */
    getPasswordResetMemberAuthorization(psswrdhnkyUrl, dvcTyp) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'GetPasswordResetMemberAuthorization';
            const args = {
                psswrdhnkyUrl: psswrdhnkyUrl,
                dvcTyp: dvcTyp
            };
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, _response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    let kiinCd = null;
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        kiinCd = result.KIIN_CD;
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: result,
                        result: kiinCd
                    });
                });
            });
        });
    }
    /**
     * 会員情報更新
     */
    editMemberInfo(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'EditMemberInfo';
            const args = new EditMemberInfoIn_1.EditMemberInfoIn(params);
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, _response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    let isSuccess = false;
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        isSuccess = true;
                    }
                    resolve({
                        response: result,
                        result: isSuccess
                    });
                });
            });
        });
    }
}
exports.MemberInfoService = MemberInfoService;
