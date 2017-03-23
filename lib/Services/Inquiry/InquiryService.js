"use strict";
const Service_1 = require("../../Common/Service");
const Constants_1 = require("../../Common/Util/Constants");
const SendInquiryMailIn_1 = require("./Models/SendInquiryMailIn");
/**
 * InquiryService
 * @class
 * @extends {Service}
 */
class InquiryService extends Service_1.default {
    /**
     * 問合せメール送信
     *
     * @param {ISendInquiryMailIn} sendInquiryMailIn
     */
    sendInquiryMail(params, cb) {
        const method = 'SendInquiryMail';
        const args = new SendInquiryMailIn_1.SendInquiryMailIn(params);
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
