"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Service_1 = require("../../common/Service");
const Constants_1 = require("../../common/util/Constants");
const GiftCardIDAuthIn_1 = require("./models/GiftCardIDAuthIn");
const GiftCardIDAuthResult_1 = require("./models/GiftCardIDAuthResult");
const GiftCardCancelIn_1 = require("./models/GiftCardCancelIn");
const GiftCardCancelResult_1 = require("./models/GiftCardCancelResult");
class GiftCardService extends Service_1.default {
    /**
     * ムビチケギフトカード認証
     *
     * @param {GiftCardIDAuthIn} args
     */
    giftCardIDAuth(params) {
        let method = 'GiftCardIDAuth';
        let args = new GiftCardIDAuthIn_1.default(params);
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let giftCardIDAuthResults = [];
                if (result.MVTKGFTCRD_INFO_OUT && result.MVTKGFTCRD_INFO_OUT.hasOwnProperty('MvtkgftcrdInfo')) {
                    if (Array.isArray(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo)) {
                        for (let info of result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo) {
                            giftCardIDAuthResults.push(GiftCardIDAuthResult_1.default.parse(info));
                        }
                    }
                    else {
                        giftCardIDAuthResults.push(GiftCardIDAuthResult_1.default.parse(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo));
                    }
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: giftCardIDAuthResults
                });
            });
        });
    }
    /**
     * ムビチケギフトカード取消
     *
     * @param {Array<GiftCardCancelIn>} args
     */
    giftCardCancel(params) {
        let method = 'GiftCardCancel';
        let args = new GiftCardCancelIn_1.default(params);
        let message = args.toXml();
        return new Promise((resolve, reject) => {
            this.call(method, message, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let giftCardCancelResults = [];
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    if (Array.isArray(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo)) {
                        for (let info of result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo) {
                            giftCardCancelResults.push(GiftCardCancelResult_1.default.parse(info));
                        }
                    }
                    else {
                        giftCardCancelResults.push(GiftCardCancelResult_1.default.parse(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo));
                    }
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: giftCardCancelResults
                });
            });
        });
    }
}
exports.default = GiftCardService;
