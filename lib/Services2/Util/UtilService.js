"use strict";
const Service_1 = require("../../common/Service");
const Constants_1 = require("../../common/util/Constants");
const CreateQrCodeIn_1 = require("./Models/CreateQrCodeIn");
class UtilService extends Service_1.default {
    /**
     * 電子券QRコード生成
     *
     * @param {CreateQrCodeIn} args
     */
    createQrCode(params, cb) {
        let method = 'CreateQrCode';
        let args = new CreateQrCodeIn_1.default(params);
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
