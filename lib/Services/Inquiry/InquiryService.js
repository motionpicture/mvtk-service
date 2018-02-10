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
const SendInquiryMailIn_1 = require("./models/SendInquiryMailIn");
/**
 * InquiryService
 */
class InquiryService extends Service_1.Service {
    /**
     * 問合せメール送信
     */
    sendInquiryMail(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'SendInquiryMail';
            const args = new SendInquiryMailIn_1.SendInquiryMailIn(params);
            let isSuccess = false;
            return new Promise((resolve, reject) => {
                this.call(method, args, (err, _response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        isSuccess = true;
                    }
                    resolve({
                        response: result,
                        result: isSuccess
                    });
                });
            });
        });
    }
}
exports.InquiryService = InquiryService;
