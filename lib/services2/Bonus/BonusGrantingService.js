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
const PreserveCodeIn_1 = require("./models/PreserveCodeIn");
const PreserveCodeResult_1 = require("./models/PreserveCodeResult");
/**
 * BonusGrantingService
 * @extends {Service}
 */
class BonusGrantingService extends Service_1.Service {
    /**
     * 特典コード確保
     */
    preserveCode(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const method = 'PreserveCode';
            const args = new PreserveCodeIn_1.PreserveCodeIn(params);
            const message = args.toXml();
            return new Promise((resolve, reject) => {
                this.call(method, message, (err, response, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    let preserveCodeResult = null;
                    if (result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_SUCCESS
                        || result.RESULT_INFO.STATUS === Constants_1.Constants.RESULT_INFO_STATUS_REPLICATION_ERROR) {
                        preserveCodeResult = PreserveCodeResult_1.PreserveCodeResult.parse(result);
                    }
                    else {
                        reject(new Error(result.RESULT_INFO.MESSAGE));
                        return;
                    }
                    resolve({
                        response: response,
                        result: preserveCodeResult
                    });
                });
            });
        });
    }
}
exports.BonusGrantingService = BonusGrantingService;
