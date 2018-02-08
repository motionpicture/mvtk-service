"use strict";
const Service_1 = require("../../common/Service");
const Constants_1 = require("../../common/util/Constants");
const MvtkGiftCardEntryIn_1 = require("./models/MvtkGiftCardEntryIn");
const MvtkGiftCardBalanceInquiryResult_1 = require("./models/MvtkGiftCardBalanceInquiryResult");
const MvtkGiftCardEntryResult_1 = require("./models/MvtkGiftCardEntryResult");
class GiftCardService extends Service_1.default {
    /**
     * ムビチケギフトカード残高確認
     *
     * @param {string} mvtkgftcrdId ギフトカードID
     * @param {string} mvtkgftcrdpinCd ギフトカードPINコード
     */
    mvtkGiftCardBalanceInquiry(mvtkgftcrdId, mvtkgftcrdpinCd) {
        let method = 'MvtkGiftCardBalanceInquiry';
        let args = {
            MVTKGFTCRD_ID: mvtkgftcrdId,
            MVTKGFTCRDPIN_CD: mvtkgftcrdpinCd,
            DVC_TYP: Constants_1.default.DVC_TYP_PC
        };
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let mvtkGiftCardBalanceInquiryResult = null;
                if (result.RESULT_INFO.STATUS === 'N00000') {
                    mvtkGiftCardBalanceInquiryResult = MvtkGiftCardBalanceInquiryResult_1.default.parse(result);
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: mvtkGiftCardBalanceInquiryResult
                });
            });
        });
    }
    /**
     * ギフトカード利用
     *
     * @param {MvtkGiftCardEntryIn} args
     */
    mvtkGiftCardEntry(params) {
        let method = 'MvtkGiftCardEntry';
        let args = new MvtkGiftCardEntryIn_1.default(params);
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let mvtkGiftCardEntryResults = [];
                if (result.RESULT_INFO.STATUS === 'N00000') {
                    if (Array.isArray(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfoOut)) {
                        for (let info of result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfoOut) {
                            mvtkGiftCardEntryResults.push(MvtkGiftCardEntryResult_1.default.parse(info));
                        }
                    }
                    else {
                        mvtkGiftCardEntryResults.push(MvtkGiftCardEntryResult_1.default.parse(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfoOut));
                    }
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: mvtkGiftCardEntryResults
                });
            });
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GiftCardService;
