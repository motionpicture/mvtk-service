"use strict";
const Service_1 = require("../../common/Service");
const Constants_1 = require("../../common/util/Constants");
const PreserveCodeIn_1 = require("./Models/PreserveCodeIn");
const PreserveCodeResult_1 = require("./Models/PreserveCodeResult");
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
    preserveCode(params, cb) {
        const method = 'PreserveCode';
        const args = new PreserveCodeIn_1.PreserveCodeIn(params);
        this.call(method, args.toXml(), (err, response, result) => {
            if (err)
                return cb(err, response, null);
            let preserveCodeResult = null;
            if (result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_SUCCESS
                || result.RESULT_INFO.STATUS === Constants_1.default.RESULT_INFO_STATUS_REPLICATION_ERROR) {
                preserveCodeResult = PreserveCodeResult_1.default.parse(result);
            }
            cb(err, response, preserveCodeResult);
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BonusGrantingService;
