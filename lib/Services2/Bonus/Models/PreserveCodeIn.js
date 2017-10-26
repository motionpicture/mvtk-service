"use strict";
const BaseIn_1 = require("../../../common/models/BaseIn");
/**
 * 特典コード確保inクラス
 * @class
 * @extends {BaseIn}
 */
class PreserveCodeIn extends BaseIn_1.default {
    /**
     * XML変換
     * @method toXml
     */
    toXml() {
        // パラメータの順序が異なるとエラーになるので注意
        let message = `
<tns:PreserveCodeIn>
    <tns:IN_PARAMETER>
        <q5:SKHN_CD>${this.SKHN_CD}</q5:SKHN_CD>
        <q5:KNSHKN_INFO>
`;
        for (const info of this.KNSHKN_INFO.KnshknInfo) {
            message += `
            <q5:KnshknInfo>
                <q5:KNSH_TYP>${info.KNSH_TYP}</q5:KNSH_TYP>
                <q5:KNYMI_NUM>${info.KNYMI_NUM}</q5:KNYMI_NUM>
            </q5:KnshknInfo>
`;
        }
        message += `
        </q5:KNSHKN_INFO>
        <q5:KNY_DT>${this.KNY_DT}</q5:KNY_DT>
`;
        if (this.HIYKSSI_FLG === '1') {
            message += `
        <q5:HIYKSSI_FLG>${this.HIYKSSI_FLG}</q5:HIYKSSI_FLG>
`;
        }
        // tslint:disable-next-line:no-multiline-string
        message += `
    </tns:IN_PARAMETER>
</tns:PreserveCodeIn>
`;
        return message;
    }
}
exports.PreserveCodeIn = PreserveCodeIn;
