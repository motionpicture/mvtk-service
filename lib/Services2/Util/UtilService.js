"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Service_1 = require("../../common/Service");
const Constants_1 = require("../../common/util/Constants");
const CreateQrCodeIn_1 = require("./models/CreateQrCodeIn");
class UtilService extends Service_1.default {
    /**
     * 電子券QRコード生成
     *
     * @param {CreateQrCodeIn} args
     */
    createQrCode(params) {
        let method = 'CreateQrCode';
        let args = new CreateQrCodeIn_1.default(params);
        const message = args.toXml();
        return new Promise((resolve, reject) => {
            this.call(method, message, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let qrcdUrl = null;
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS) {
                    qrcdUrl = result.QRCD_URL;
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: qrcdUrl
                });
            });
        });
    }
}
exports.default = UtilService;
