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
        <q1:TKN_ID>${this.TKN_ID}</q1:TKN_ID>
        <q1:SKHN_CD>${this.SKHN_CD}</q1:SKHN_CD>
        <q1:KSSIHH_TYP>${this.KSSIHH_TYP}</q1:KSSIHH_TYP>
        <q1:KNSHKN_INFO>
`;
        if (this.HIYKSSI_FLG === '1') {
            message += `
        <q1:HIYKSSI_FLG>${this.HIYKSSI_FLG}</q1:HIYKSSI_FLG>
`;
        }
        message += `
        <q1:HIYKSSI_TYP>${this.HIYKSSI_TYP}</q1:HIYKSSI_TYP>
        <q1:KNY_DT>${this.KNY_DT}</q1:KNY_DT>
`;
        if (this.KNSHKN_INFO !== null) {
            message += `
        <q1:KNSHKN_INFO>`;
            for (let info of this.KNSHKN_INFO.KnshknInfo) {
                message += `
            <q2:KNSHKN>
                <q2:KNSH_TYP>${info.KNSH_TYP}</q2:KNSH_TYP>
                <q2:KNYMI_NUM>${info.KNYMI_NUM}</q2:KNYMI_NUM>
            </q2:KNSHKN>
`;
            }
        }
        message += `
        </q1:KNSHKN_INFO>
        `;
        // tslint:disable-next-line:no-multiline-string
        message += `
    </tns:IN_PARAMETER>
</tns:PreserveCodeIn>
`;
        return message;
    }
}
exports.PreserveCodeIn = PreserveCodeIn;
