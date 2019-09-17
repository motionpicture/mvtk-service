
import { Util } from '../../../common/util/Util';

/**
 * GetQuestionnaireListResult
 */
export class GetQuestionnaireListResult {
    /**
     * アンケート設問情報(itemArray)
     */
    public qustinnarstsmnInfo: QustinnarstsmnInfo[];

    public static parse(resultObject: any): GetQuestionnaireListResult {
        const result = new GetQuestionnaireListResult();

        for (const propertyName in resultObject) {
            const normalizedName = Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            if (normalizedName === 'qustinnarstsmnInfo') {
                const qustinnarstsmnInfos: QustinnarstsmnInfo[] = [];

                if (property !== null && property.hasOwnProperty('QustinnarstsmnInfo')) {
                    if (Array.isArray(property.QustinnarstsmnInfo)) {
                        for (const qustinnarstsmnInfo of property.QustinnarstsmnInfo) {

                            const qustinnarsntkshInfos: QustinnarsntkshInfo[] = [];

                            if (qustinnarstsmnInfo.QUSTINNARSNTKSH_INFO !== null
                                && qustinnarstsmnInfo.QUSTINNARSNTKSH_INFO.hasOwnProperty('QustinnarsntkshInfo')) {
                                if (Array.isArray(qustinnarstsmnInfo.QUSTINNARSNTKSH_INFO.QustinnarsntkshInfo)) {
                                    for (const qustinnarsntkshInfo of qustinnarstsmnInfo.QUSTINNARSNTKSH_INFO.QustinnarsntkshInfo) {
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
                        const qustinnarsntkshInfos: QustinnarsntkshInfo[] = [];

                        if (property.QustinnarstsmnInfo.QUSTINNARSNTKSH_INFO !== null
                            && property.QustinnarstsmnInfo.QUSTINNARSNTKSH_INFO.hasOwnProperty('QustinnarsntkshInfo')) {
                            if (Array.isArray(property.QustinnarstsmnInfo.QUSTINNARSNTKSH_INFO.QustinnarsntkshInfo)) {
                                for (const qustinnarsntkshInfo of property.QustinnarstsmnInfo.QUSTINNARSNTKSH_INFO.QustinnarsntkshInfo) {
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
                (<any>result)[normalizedName] = property;
            }
        }

        return result;
    }
}

export interface QustinnarstsmnInfo {
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
    QUSTINNARSNTKSH_INFO: QustinnarsntkshInfo[];
    /**
     * 設問区分（00:前売当日共通／01:前売のみ／02:当日のみ）
     */
    STSMN_TYP: string;
}

export interface QustinnarsntkshInfo {
    /**
     * 選択肢番号
     */
    SNTKSH_NO: string;
    /**
     * 選択肢名称
     */
    SNTKSH_NM: string;
}
