"use strict";
const Service_1 = require("../../common/Service");
const Constants_1 = require("../../common/util/Constants");
const PreserveCodeIn_1 = require("./models/PreserveCodeIn");
const PreserveCodeResult_1 = require("./models/PreserveCodeResult");
/**
 * BonusGrantingService
 * @class
 * @extends {Service}
 */
class BonusGrantingService extends Service_1.default {
    /**
     * 特典コード確保
     *
     * @param {IPreserveCodeIn} args
     */
    preserveCode(params) {
        const method = 'PreserveCode';
        const args = new PreserveCodeIn_1.PreserveCodeIn(params);
        let message = args.toXml();
        return new Promise((resolve, reject) => {
            this.call(method, message, (err, response, result) => {
                if (err) {
                    return reject(err);
                }
                let preserveCodeResult = null;
                if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS
                    || result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_REPLICATION_ERROR) {
                    preserveCodeResult = PreserveCodeResult_1.default.parse(result);
                }
                else {
                    return reject(new Error(result.RESULT_INFO.MESSAGE));
                }
                resolve({
                    response: response,
                    result: preserveCodeResult
                });
            });
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BonusGrantingService;
