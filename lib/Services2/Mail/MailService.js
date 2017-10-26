"use strict";
const Service_1 = require("../../common/Service");
const Constants_1 = require("../../common/util/Constants");
const DeliveryIn_1 = require("./Models/DeliveryIn");
class MailService extends Service_1.default {
    /**
     * 購入管理番号メール送信
     *
     * @param {DeliveryIn} args
     */
    delivery(params, cb) {
        let method = 'Delivery';
        let args = new DeliveryIn_1.default(params);
        let message = args.toXml();
        this.call(method, message, (err, response, result) => {
            if (err)
                return cb(err, response, false);
            let isSuccess = false;
            if (result.ResultInfo.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                isSuccess = true;
            }
            cb(err, response, isSuccess);
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MailService;
