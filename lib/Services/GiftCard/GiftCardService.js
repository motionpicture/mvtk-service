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
const MvtkGiftCardBalanceInquiryResult_1 = require("./models/MvtkGiftCardBalanceInquiryResult");
const MvtkGiftCardEntryIn_1 = require("./models/MvtkGiftCardEntryIn");
const MvtkGiftCardEntryResult_1 = require("./models/MvtkGiftCardEntryResult");
/**
 * GiftCardService
 */
class GiftCardService extends Service_1.Service {
    /**
     * ムビチケギフトカード残高確認
     *
     * @param mvtkgftcrdId ギフトカードID
     * @param mvtkgftcrdpinCd ギフトカードPINコード
     */
    mvtkGiftCardBalanceInquiry(mvtkgftcrdId, mvtkgftcrdpinCd) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'MvtkGiftCardBalanceInquiry';
            const args = {
                MVTKGFTCRD_ID: mvtkgftcrdId,
                MVTKGFTCRDPIN_CD: mvtkgftcrdpinCd,
                DVC_TYP: Constants_1.Constants.DVC_TYP_PC
            };
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, _response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    let mvtkGiftCardBalanceInquiryResult;
                    if (result.RESULT_INFO.STATUS === 'N00000') {
                        mvtkGiftCardBalanceInquiryResult = MvtkGiftCardBalanceInquiryResult_1.MvtkGiftCardBalanceInquiryResult.parse(result);
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: result,
                        result: mvtkGiftCardBalanceInquiryResult
                    });
                });
            });
        });
    }
    /**
     * ギフトカード利用
     */
    mvtkGiftCardEntry(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'MvtkGiftCardEntry';
            const args = new MvtkGiftCardEntryIn_1.MvtkGiftCardEntryIn(params);
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, _response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    const mvtkGiftCardEntryResults = [];
                    if (result.RESULT_INFO.STATUS === 'N00000') {
                        if (Array.isArray(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfoOut)) {
                            for (const info of result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfoOut) {
                                mvtkGiftCardEntryResults.push(MvtkGiftCardEntryResult_1.MvtkGiftCardEntryResult.parse(info));
                            }
                        }
                        else {
                            mvtkGiftCardEntryResults.push(MvtkGiftCardEntryResult_1.MvtkGiftCardEntryResult.parse(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfoOut));
                        }
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: result,
                        result: mvtkGiftCardEntryResults
                    });
                });
            });
        });
    }
}
exports.GiftCardService = GiftCardService;
