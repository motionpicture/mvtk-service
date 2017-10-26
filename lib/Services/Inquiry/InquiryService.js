"use strict";
const Service_1 = require("../../common/Service");
const Constants_1 = require("../../common/util/Constants");
const SendInquiryMailIn_1 = require("./Models/SendInquiryMailIn");
class InquiryService extends Service_1.default {
    /**
     * 問合せメール送信
     *
     * @param {SendInquiryMailIn} sendInquiryMailIn
     */
    sendInquiryMail(params, cb) {
        let method = 'SendInquiryMail';
        let args = new SendInquiryMailIn_1.default(params);
        let isSuccess = false;
        this.call(method, args, (err, response, result) => {
            if (err)
                return cb(err, response, isSuccess);
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                isSuccess = true;
            }
            cb(err, response, isSuccess);
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = InquiryService;
