"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseIn_1 = require("../../../common/models/BaseIn");
class RegisterQuestionnaireIn extends BaseIn_1.default {
    toXml() {
        let message = `
<tns:RegisterQuestionnaire>
    <tns:skhnCd>${this.skhnCd}</tns:skhnCd>
    <tns:knyknrNo>${this.knyknrNo}</tns:knyknrNo>
    <tns:qustinnarkitInfo>
`;
        if (this.qustinnarkitInfo === undefined) {
            message += `
        <q19:QustinnarkitInfo/>
`;
        }
        else {
            // 回答情報があれば追加
            let qustinnarkitInfos = this.qustinnarkitInfo.QustinnarkitInfo;
            if (Array.isArray(qustinnarkitInfos) && qustinnarkitInfos.length > 0) {
                for (let qustinnarkitInfo of qustinnarkitInfos) {
                    message += `
        <q19:QustinnarkitInfo>
            <q19:KITHSHK_TYP>${qustinnarkitInfo.KITHSHK_TYP}</q19:KITHSHK_TYP>
            <q19:KJTSKIT_TXT>${qustinnarkitInfo.KJTSKIT_TXT}</q19:KJTSKIT_TXT>
            <q19:SNTKSHKQUSTINNARKIT_INFO>
`;
                    // 選択肢情報があれば追加
                    let sntkshkqustinnarkitInfos = qustinnarkitInfo.SNTKSHKQUSTINNARKIT_INFO.SntkshkqustinnarkitInfo;
                    if (Array.isArray(sntkshkqustinnarkitInfos) && sntkshkqustinnarkitInfos.length > 0) {
                        for (let sntkshkqustinnarkitInfo of sntkshkqustinnarkitInfos) {
                            message += `
                <q19:SntkshkqustinnarkitInfo>
                    <q19:SNTKSH_NO>${sntkshkqustinnarkitInfo.SNTKSH_NO}</q19:SNTKSH_NO>
                </q19:SntkshkqustinnarkitInfo>
`;
                        }
                    }
                    else {
                        message += `
                <q19:SntkshkqustinnarkitInfo/>
`;
                    }
                    message += `
            </q19:SNTKSHKQUSTINNARKIT_INFO>
            <q19:QUSTINNARSTSMN_NO>${qustinnarkitInfo.QUSTINNARSTSMN_NO}</q19:QUSTINNARSTSMN_NO>
        </q19:QustinnarkitInfo>
`;
                }
            }
            else {
                message += `
        <q19:QustinnarkitInfo/>
`;
            }
        }
        message += `
    </tns:qustinnarkitInfo>
    <tns:knyshCd>${this.knyshCd}</tns:knyshCd>
`;
        if (this.kticmmntTxt) {
            message += `
    <tns:kticmmntTxt>${this.kticmmntTxt}</tns:kticmmntTxt>
`;
        }
        message += `
</tns:RegisterQuestionnaire>
`;
        return message;
    }
}
exports.default = RegisterQuestionnaireIn;
