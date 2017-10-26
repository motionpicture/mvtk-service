"use strict";
const Service_1 = require("../../common/Service");
const Constants_1 = require("../../common/util/Constants");
const GiftCardIDAuthIn_1 = require("./Models/GiftCardIDAuthIn");
const GiftCardIDAuthResult_1 = require("./Models/GiftCardIDAuthResult");
const GiftCardCancelIn_1 = require("./Models/GiftCardCancelIn");
const GiftCardCancelResult_1 = require("./Models/GiftCardCancelResult");
class GiftCardService extends Service_1.default {
    /**
     * ムビチケギフトカード認証
     *
     * @param {GiftCardIDAuthIn} args
     */
    giftCardIDAuth(params, cb) {
        let method = 'GiftCardIDAuth';
        let args = new GiftCardIDAuthIn_1.default(params);
        this.call(method, args.toXml(), (err, response, result) => {
            if (err)
                return cb(err, response, null);
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
            cb(err, response, giftCardIDAuthResults);
        });
    }
    /**
     * ムビチケギフトカード取消
     *
     * @param {Array<GiftCardCancelIn>} args
     */
    giftCardCancel(params, cb) {
        let method = 'GiftCardCancel';
        let args = new GiftCardCancelIn_1.default(params);
        let message = args.toXml();
        this.call(method, message, (err, response, result) => {
            if (err)
                return cb(err, response, null);
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
            cb(err, response, giftCardCancelResults);
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GiftCardService;
