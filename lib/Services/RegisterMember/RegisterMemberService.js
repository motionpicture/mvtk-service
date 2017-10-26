"use strict";
const Service_1 = require("../../common/Service");
const Constants_1 = require("../../common/util/Constants");
const RegisterMemberTemporaryIn_1 = require("./Models/RegisterMemberTemporaryIn");
class RegisterMemberService extends Service_1.default {
    /**
     * 会員情報仮登録
     *
     * @param {RegisterMemberTemporaryIn} registerMemberTemporaryIn
     */
    registerMemberTemporary(params, cb) {
        let method = 'RegisterMemberTemporary';
        let args = new RegisterMemberTemporaryIn_1.default(params);
        this.call(method, args.toXml(), (err, response, result) => {
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
     * 会員情報仮登録完了メール送信
     *
     * @param {string} kiinCd 会員コード
     */
    sendMemberTemporaryCompletionMail(kiinCd, cb) {
        let method = 'SendMemberTemporaryCompletionMail';
        let args = {
            kiinCd: kiinCd
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
     * 会員情報本登録・代行会社会員登録呼出
     *
     * @param {string} hmbntrkyUrl   本登録用パラメータ（本登録URLの末尾に付与されている）
     * @param {string} kiintrkdvcTyp 会員登録デバイス区分
     */
    registerMemberProperly(hmbntrkyUrl, kiintrkdvcTyp, cb) {
        let method = 'RegisterMemberProperly';
        let args = {
            hmbntrkyUrl: hmbntrkyUrl,
            kiintrkdvcTyp: kiintrkdvcTyp,
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
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RegisterMemberService;
