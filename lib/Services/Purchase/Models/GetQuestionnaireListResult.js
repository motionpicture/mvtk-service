"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../../../common/util/Util");
/**
 * GetQuestionnaireListResult
 */
class GetQuestionnaireListResult {
    static parse(resultObject) {
        const result = new GetQuestionnaireListResult();
        for (const propertyName in resultObject) {
            const normalizedName = Util_1.Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            if (normalizedName === 'qustinnarstsmnInfo') {
                const qustinnarstsmnInfos = [];
                if (property !== null && property.hasOwnProperty('QustinnarstsmnInfo')) {
                    if (Array.isArray(property.QustinnarstsmnInfo)) {
                        for (const qustinnarstsmnInfo of property.QustinnarstsmnInfo) {
                            const qustinnarsntkshInfos = [];
                            if (qustinnarstsmnInfo.QUSTINNARSNTKSH_INFO !== null
                                && qustinnarstsmnInfo.QUSTINNARSNTKSH_INFO.hasOwnProperty('QustinnarsntkshInfo')) {
                                if (Array.isArray(qustinnarstsmnInfo.QUSTINNARSNTKSH_INFO.QustinnarsntkshInfo)) {
                                    for (const qustinnarsntkshInfo of qustinnarstsmnInfo.QUSTINNARSNTKSH_INFO.QustinnarsntkshInfo) {
                                        qustinnarsntkshInfos.push(qustinnarsntkshInfo);
                                    }
                                }
                                else {
                                    qustinnarsntkshInfos.push(qustinnarstsmnInfo.QUSTINNARSNTKSH_INFO.QustinnarsntkshInfo);
                                }
                            }
                            qustinnarstsmnInfo.QUSTINNARSNTKSH_INFO = qustinnarsntkshInfos;
                            qustinnarstsmnInfos.push(qustinnarstsmnInfo);
                        }
                    }
                    else {
                        const qustinnarsntkshInfos = [];
                        if (property.QustinnarstsmnInfo.QUSTINNARSNTKSH_INFO !== null
                            && property.QustinnarstsmnInfo.QUSTINNARSNTKSH_INFO.hasOwnProperty('QustinnarsntkshInfo')) {
                            if (Array.isArray(property.QustinnarstsmnInfo.QUSTINNARSNTKSH_INFO.QustinnarsntkshInfo)) {
                                for (const qustinnarsntkshInfo of property.QustinnarstsmnInfo.QUSTINNARSNTKSH_INFO.QustinnarsntkshInfo) {
                                    qustinnarsntkshInfos.push(qustinnarsntkshInfo);
                                }
                            }
                            else {
                                qustinnarsntkshInfos.push(property.QustinnarstsmnInfo.QUSTINNARSNTKSH_INFO.QustinnarsntkshInfo);
                            }
                        }
                        property.QustinnarstsmnInfo.QUSTINNARSNTKSH_INFO = qustinnarsntkshInfos;
                        qustinnarstsmnInfos.push(property.QustinnarstsmnInfo);
                    }
                }
                result[normalizedName] = qustinnarstsmnInfos;
            }
            else {
                result[normalizedName] = property;
            }
        }
        return result;
    }
}
exports.GetQuestionnaireListResult = GetQuestionnaireListResult;
