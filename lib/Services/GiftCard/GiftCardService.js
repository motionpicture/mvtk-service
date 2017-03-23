"use strict";
const Service_1 = require("../../Common/Service");
const Constants_1 = require("../../Common/Util/Constants");
const MvtkGiftCardBalanceInquiryResult_1 = require("./Models/MvtkGiftCardBalanceInquiryResult");
const MvtkGiftCardEntryIn_1 = require("./Models/MvtkGiftCardEntryIn");
const MvtkGiftCardEntryResult_1 = require("./Models/MvtkGiftCardEntryResult");
/**
 * GiftCardService
 * @class
 * @extends {Service}
 */
class GiftCardService extends Service_1.default {
    /**
     * ムビチケギフトカード残高確認
     *
     * @param {string} mvtkgftcrdId ギフトカードID
     * @param {string} mvtkgftcrdpinCd ギフトカードPINコード
     */
    mvtkGiftCardBalanceInquiry(mvtkgftcrdId, mvtkgftcrdpinCd, cb) {
        const method = 'MvtkGiftCardBalanceInquiry';
        const args = {
            MVTKGFTCRD_ID: mvtkgftcrdId,
            MVTKGFTCRDPIN_CD: mvtkgftcrdpinCd,
            DVC_TYP: Constants_1.default.DVC_TYP_PC
        };
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, null);
            let mvtkGiftCardBalanceInquiryResult = null;
            if (result.RESULT_INFO.STATUS === 'N00000') {
                mvtkGiftCardBalanceInquiryResult = MvtkGiftCardBalanceInquiryResult_1.default.parse(result);
            }
            cb(err, response, mvtkGiftCardBalanceInquiryResult);
        });
    }
    /**
     * ギフトカード利用
     *
     * @param {IMvtkGiftCardEntryIn} args
     */
    mvtkGiftCardEntry(params, cb) {
        const method = 'MvtkGiftCardEntry';
        const args = new MvtkGiftCardEntryIn_1.MvtkGiftCardEntryIn(params);
        this.call(method, args.toXml(), (err, response, result) => {
            if (err)
                return cb(err, response, null);
            const mvtkGiftCardEntryResults = [];
            if (result.RESULT_INFO.STATUS === 'N00000') {
                if (Array.isArray(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfoOut)) {
                    for (const info of result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfoOut) {
                        mvtkGiftCardEntryResults.push(MvtkGiftCardEntryResult_1.default.parse(info));
                    }
                }
                else {
                    mvtkGiftCardEntryResults.push(MvtkGiftCardEntryResult_1.default.parse(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfoOut));
                }
            }
            cb(err, response, mvtkGiftCardEntryResults);
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GiftCardService;
