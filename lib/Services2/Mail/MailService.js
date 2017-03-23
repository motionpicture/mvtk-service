"use strict";
const Service_1 = require("../../Common/Service");
const Constants_1 = require("../../Common/Util/Constants");
const DeliveryIn_1 = require("./Models/DeliveryIn");
/**
 * MailService
 * @class
 * @extends {Service}
 */
class MailService extends Service_1.default {
    /**
     * 購入管理番号メール送信
     *
     * @param {IDeliveryIn} args
     */
    delivery(params, cb) {
        const method = 'Delivery';
        const args = new DeliveryIn_1.DeliveryIn(params);
        const message = args.toXml();
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
