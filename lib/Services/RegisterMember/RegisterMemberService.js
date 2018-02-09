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
const RegisterMemberTemporaryIn_1 = require("./models/RegisterMemberTemporaryIn");
/**
 * RegisterMemberService
 */
class RegisterMemberService extends Service_1.Service {
    /**
     * 会員情報仮登録
     */
    registerMemberTemporary(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'RegisterMemberTemporary';
            const args = new RegisterMemberTemporaryIn_1.RegisterMemberTemporaryIn(params);
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
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
                        response: response,
                        result: kiinCd
                    });
                });
            });
        });
    }
    /**
     * 会員情報仮登録完了メール送信
     */
    sendMemberTemporaryCompletionMail(kiinCd) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'SendMemberTemporaryCompletionMail';
            const args = {
                kiinCd: kiinCd
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
     * 会員情報本登録・代行会社会員登録呼出
     *
     * @param hmbntrkyUrl   本登録用パラメータ（本登録URLの末尾に付与されている）
     * @param kiintrkdvcTyp 会員登録デバイス区分
     */
    registerMemberProperly(hmbntrkyUrl, kiintrkdvcTyp) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'RegisterMemberProperly';
            const args = {
                hmbntrkyUrl: hmbntrkyUrl,
                kiintrkdvcTyp: kiintrkdvcTyp
            };
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
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
                        response: response,
                        result: kiinCd
                    });
                });
            });
        });
    }
}
exports.RegisterMemberService = RegisterMemberService;
