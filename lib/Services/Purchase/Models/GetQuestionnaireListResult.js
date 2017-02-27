"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * アンケート設問検索out
 * @class
 */
class GetQuestionnaireListResult {
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new GetQuestionnaireListResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
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
        });
        return result;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GetQuestionnaireListResult;
