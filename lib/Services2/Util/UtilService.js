"use strict";
const Service_1 = require("../../Common/Service");
const Constants_1 = require("../../Common/Util/Constants");
const CreateQrCodeIn_1 = require("./Models/CreateQrCodeIn");
/**
 * UtilService
 * @class
 * @extends {Service}
 */
class UtilService extends Service_1.default {
    /**
     * 電子券QRコード生成
     *
     * @param {ICreateQrCodeIn} args
     */
    createQrCode(params, cb) {
        const method = 'CreateQrCode';
        const args = new CreateQrCodeIn_1.CreateQrCodeIn(params);
        this.call(method, args.toXml(), (err, response, result) => {
            if (err)
                return cb(err, response, null);
            let qrcdUrl = null;
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                qrcdUrl = result.QRCD_URL;
            }
            cb(err, response, qrcdUrl);
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UtilService;
