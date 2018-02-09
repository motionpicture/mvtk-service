"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Service_1 = require("../../common/Service");
const Constants_1 = require("../../common/util/Constants");
const SendInquiryMailIn_1 = require("./models/SendInquiryMailIn");
class InquiryService extends Service_1.default {
    /**
     * 問合せメール送信
     *
     * @param {SendInquiryMailIn} sendInquiryMailIn
     */
    sendInquiryMail(params) {
        let method = 'SendInquiryMail';
        let args = new SendInquiryMailIn_1.default(params);
        let isSuccess = false;
        return new Promise((resolve, reject) => {
            this.call(method, args, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    isSuccess = true;
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: isSuccess
                });
            });
        });
    }
}
exports.default = InquiryService;
