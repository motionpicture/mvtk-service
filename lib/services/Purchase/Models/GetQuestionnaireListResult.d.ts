export default class GetQuestionnaireListResult {
    /**
     * アンケート設問情報(itemArray)
     */
    qustinnarstsmnInfo: Array<QustinnarstsmnInfo>;
    static parse(resultObject: any): GetQuestionnaireListResult;
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
    QUSTINNARSNTKSH_INFO: Array<QustinnarsntkshInfo>;
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
