import CommonUtil from '../../../common/util/Util';

export default class GetQuestionnaireListResult {
    /**
     * アンケート設問情報(itemArray)
     */
    public qustinnarstsmnInfo: Array<QustinnarstsmnInfo>;

    public static parse (resultObject): GetQuestionnaireListResult {
        let result = new GetQuestionnaireListResult();

        for (let propertyName in resultObject) {
            let normalizedName = CommonUtil.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];

            if (normalizedName === 'qustinnarstsmnInfo') {
                let qustinnarstsmnInfos: Array<QustinnarstsmnInfo> = [];

                if (property !== null && property.hasOwnProperty('QustinnarstsmnInfo')) {
                    if (Array.isArray(property.QustinnarstsmnInfo)) {
                        for (let qustinnarstsmnInfo of property.QustinnarstsmnInfo) {

                            let qustinnarsntkshInfos: Array<QustinnarsntkshInfo> = [];

                            if (qustinnarstsmnInfo.QUSTINNARSNTKSH_INFO !== null && qustinnarstsmnInfo.QUSTINNARSNTKSH_INFO.hasOwnProperty('QustinnarsntkshInfo')) {
                                if (Array.isArray(qustinnarstsmnInfo.QUSTINNARSNTKSH_INFO.QustinnarsntkshInfo)) {
                                    for (let qustinnarsntkshInfo of qustinnarstsmnInfo.QUSTINNARSNTKSH_INFO.QustinnarsntkshInfo) {
                                        qustinnarsntkshInfos.push(qustinnarsntkshInfo);
                                    }
                                } else {
                                    qustinnarsntkshInfos.push(qustinnarstsmnInfo.QUSTINNARSNTKSH_INFO.QustinnarsntkshInfo);
                                }
                            }

                            qustinnarstsmnInfo.QUSTINNARSNTKSH_INFO = qustinnarsntkshInfos;
                            qustinnarstsmnInfos.push(qustinnarstsmnInfo);
                        }
                    } else {
                        let qustinnarsntkshInfos: Array<QustinnarsntkshInfo> = [];

                        if (property.QustinnarstsmnInfo.QUSTINNARSNTKSH_INFO !== null && property.QustinnarstsmnInfo.QUSTINNARSNTKSH_INFO.hasOwnProperty('QustinnarsntkshInfo')) {
                            if (Array.isArray(property.QustinnarstsmnInfo.QUSTINNARSNTKSH_INFO.QustinnarsntkshInfo)) {
                                for (let qustinnarsntkshInfo of property.QustinnarstsmnInfo.QUSTINNARSNTKSH_INFO.QustinnarsntkshInfo) {
                                    qustinnarsntkshInfos.push(qustinnarsntkshInfo);
                                }
                            } else {
                                qustinnarsntkshInfos.push(property.QustinnarstsmnInfo.QUSTINNARSNTKSH_INFO.QustinnarsntkshInfo);
                            }
                        }

                        property.QustinnarstsmnInfo.QUSTINNARSNTKSH_INFO = qustinnarsntkshInfos;
                        qustinnarstsmnInfos.push(property.QustinnarstsmnInfo);
                    }
                }

                result[normalizedName] = qustinnarstsmnInfos;
            } else {
                result[normalizedName] = property;
            }
        }

        return result;
    }
}

interface QustinnarstsmnInfo {
    /**
     * アンケート設問番号
     */
    QUSTINNARSTSMN_NO: string;
    /**
     * アンケート設問本文
     */
    QUSTINNARSTSMN_TXT: string;
    /**
     * 回答方式区分
     */
    KITHSHK_TYP: string;
    /**
     * アンケート表示形式区分
     */
    QUSTINNARHYJKISHK_TYP: string;
    /**
     * 回答上限数
     */
    KITJGN_NUM: string;
    /**
     * アンケート選択肢情報(itemArray)
     */
    QUSTINNARSNTKSH_INFO: Array<QustinnarsntkshInfo>;
}

interface QustinnarsntkshInfo {
    /**
     * 選択肢番号
     */
    SNTKSH_NO: string;
    /**
     * 選択肢名称
     */
    SNTKSH_NM: string;
}
