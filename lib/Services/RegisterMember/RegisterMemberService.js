"use strict";
const Service_1 = require("../../common/Service");
const Constants_1 = require("../../common/util/Constants");
const RegisterMemberTemporaryIn_1 = require("./models/RegisterMemberTemporaryIn");
class RegisterMemberService extends Service_1.default {
    /**
     * 会員情報仮登録
     *
     * @param {RegisterMemberTemporaryIn} registerMemberTemporaryIn
     */
    registerMemberTemporary(params) {
        let method = 'RegisterMemberTemporary';
        let args = new RegisterMemberTemporaryIn_1.default(params);
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
     * 会員情報仮登録完了メール送信
     *
     * @param {string} kiinCd 会員コード
     */
    sendMemberTemporaryCompletionMail(kiinCd) {
        let method = 'SendMemberTemporaryCompletionMail';
        let args = {
            kiinCd: kiinCd
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
     * 会員情報本登録・代行会社会員登録呼出
     *
     * @param {string} hmbntrkyUrl   本登録用パラメータ（本登録URLの末尾に付与されている）
     * @param {string} kiintrkdvcTyp 会員登録デバイス区分
     */
    registerMemberProperly(hmbntrkyUrl, kiintrkdvcTyp) {
        let method = 'RegisterMemberProperly';
        let args = {
            hmbntrkyUrl: hmbntrkyUrl,
            kiintrkdvcTyp: kiintrkdvcTyp,
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
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RegisterMemberService;
