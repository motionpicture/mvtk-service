"use strict";
const Service_1 = require("../../Common/Service");
const Constants_1 = require("../../Common/Util/Constants");
const GiftCardCancelIn_1 = require("./Models/GiftCardCancelIn");
const GiftCardCancelResult_1 = require("./Models/GiftCardCancelResult");
const GiftCardIDAuthIn_1 = require("./Models/GiftCardIDAuthIn");
const GiftCardIDAuthResult_1 = require("./Models/GiftCardIDAuthResult");
/**
 * GiftCardService
 * @class
 * @extends {Service}
 */
class GiftCardService extends Service_1.default {
    /**
     * ムビチケギフトカード認証
     *
     * @param {IGiftCardIDAuthIn} args
     */
    giftCardIDAuth(params, cb) {
        const method = 'GiftCardIDAuth';
        const args = new GiftCardIDAuthIn_1.GiftCardIDAuthIn(params);
        this.call(method, args.toXml(), (err, response, result) => {
            if (err)
                return cb(err, response, null);
            const giftCardIDAuthResults = [];
            if (result.MVTKGFTCRD_INFO_OUT && result.MVTKGFTCRD_INFO_OUT.hasOwnProperty('MvtkgftcrdInfo')) {
                if (Array.isArray(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo)) {
                    for (const info of result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo) {
                        giftCardIDAuthResults.push(GiftCardIDAuthResult_1.default.parse(info));
                    }
                }
                else {
                    giftCardIDAuthResults.push(GiftCardIDAuthResult_1.default.parse(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo));
                }
            }
            cb(err, response, giftCardIDAuthResults);
        });
    }
    /**
     * ムビチケギフトカード取消
     *
     * @param {Array<IGiftCardCancelIn>} args
     */
    giftCardCancel(params, cb) {
        const method = 'GiftCardCancel';
        const args = new GiftCardCancelIn_1.GiftCardCancelIn(params);
        const message = args.toXml();
        this.call(method, message, (err, response, result) => {
            if (err)
                return cb(err, response, null);
            const giftCardCancelResults = [];
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                if (Array.isArray(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo)) {
                    for (const info of result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo) {
                        giftCardCancelResults.push(GiftCardCancelResult_1.default.parse(info));
                    }
                }
                else {
                    giftCardCancelResults.push(GiftCardCancelResult_1.default.parse(result.MVTKGFTCRD_INFO_OUT.MvtkgftcrdInfo));
                }
            }
            cb(err, response, giftCardCancelResults);
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GiftCardService;
