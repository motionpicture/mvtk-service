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
const CreateQrCodeIn_1 = require("./models/CreateQrCodeIn");
/**
 * UtilService2
 */
class UtilService2 extends Service_1.Service {
    /**
     * 電子券QRコード生成
     *
     */
    createQrCode(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'CreateQrCode';
            const args = new CreateQrCodeIn_1.CreateQrCodeIn(params);
            const message = args.toXml();
            return new Promise((resolve, reject) => {
                this.call(method, message, (err, _response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    let qrcdUrl;
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS) {
                        qrcdUrl = result.QRCD_URL;
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: result,
                        result: qrcdUrl
                    });
                });
            });
        });
    }
}
exports.UtilService2 = UtilService2;
