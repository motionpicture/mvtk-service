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
const GiftCardCancelIn_1 = require("./models/GiftCardCancelIn");
const GiftCardCancelResult_1 = require("./models/GiftCardCancelResult");
const GiftCardIDAuthIn_1 = require("./models/GiftCardIDAuthIn");
const GiftCardIDAuthResult_1 = require("./models/GiftCardIDAuthResult");
/**
 * GiftCardService
 */
class GiftCardService2 extends Service_1.Service {
    /**
     * ムビチケギフトカード認証
     */
    giftCardIDAuth(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'GiftCardIDAuth';
            const args = new GiftCardIDAuthIn_1.GiftCardIDAuthIn(params);
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    const giftCardIDAuthResults = [];
                    if (result.MVTKGFTCRD_INFO_OUT && result.MVTKGFTCRD_INFO_OUT.hasOwnProperty('MvtkgftcrdInfo')) {
                        if (Array.isArray(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo)) {
                            for (const info of result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo) {
                                giftCardIDAuthResults.push(GiftCardIDAuthResult_1.GiftCardIDAuthResult.parse(info));
                            }
                        }
                        else {
                            giftCardIDAuthResults.push(GiftCardIDAuthResult_1.GiftCardIDAuthResult.parse(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo));
                        }
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: giftCardIDAuthResults
                    });
                });
            });
        });
    }
    /**
     * ムビチケギフトカード取消
     */
    giftCardCancel(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'GiftCardCancel';
            const args = new GiftCardCancelIn_1.GiftCardCancelIn(params);
            const message = args.toXml();
            return new Promise((resolve, reject) => {
                this.call(method, message, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    const giftCardCancelResults = [];
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        if (Array.isArray(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo)) {
                            for (const info of result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo) {
                                giftCardCancelResults.push(GiftCardCancelResult_1.GiftCardCancelResult.parse(info));
                            }
                        }
                        else {
                            giftCardCancelResults.push(GiftCardCancelResult_1.GiftCardCancelResult.parse(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo));
                        }
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: giftCardCancelResults
                    });
                });
            });
        });
    }
}
exports.GiftCardService2 = GiftCardService2;
