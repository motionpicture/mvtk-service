"use strict";
const Util_1 = require("../../../common/util/Util");
class GetQuestionnaireListResult {
    static parse(resultObject) {
        let result = new GetQuestionnaireListResult();
        for (let propertyName in resultObject) {
            let normalizedName = Util_1.default.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];
            if (normalizedName === 'qustinnarstsmnInfo') {
                let qustinnarstsmnInfos = [];
                if (property !== null && property.hasOwnProperty('QustinnarstsmnInfo')) {
                    if (Array.isArray(property.QustinnarstsmnInfo)) {
                        for (let qustinnarstsmnInfo of property.QustinnarstsmnInfo) {
                            let qustinnarsntkshInfos = [];
                            if (qustinnarstsmnInfo.QUSTINNARSNTKSH_INFO !== null && qustinnarstsmnInfo.QUSTINNARSNTKSH_INFO.hasOwnProperty('QustinnarsntkshInfo')) {
                                if (Array.isArray(qustinnarstsmnInfo.QUSTINNARSNTKSH_INFO.QustinnarsntkshInfo)) {
                                    for (let qustinnarsntkshInfo of qustinnarstsmnInfo.QUSTINNARSNTKSH_INFO.QustinnarsntkshInfo) {
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
                        let qustinnarsntkshInfos = [];
                        if (property.QustinnarstsmnInfo.QUSTINNARSNTKSH_INFO !== null && property.QustinnarstsmnInfo.QUSTINNARSNTKSH_INFO.hasOwnProperty('QustinnarsntkshInfo')) {
                            if (Array.isArray(property.QustinnarstsmnInfo.QUSTINNARSNTKSH_INFO.QustinnarsntkshInfo)) {
                                for (let qustinnarsntkshInfo of property.QustinnarstsmnInfo.QUSTINNARSNTKSH_INFO.QustinnarsntkshInfo) {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GetQuestionnaireListResult;
