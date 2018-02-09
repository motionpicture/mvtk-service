"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseIn_1 = require("../../../common/models/BaseIn");
/**
 * 特典コード確保inクラス
 * @extends {BaseIn}
 */
class PreserveCodeIn extends BaseIn_1.BaseIn {
    /**
     * XML変換
     * @method toXml
     */
    toXml() {
        // パラメータの順序が異なるとエラーになるので注意
        let message = `
<tns:PreserveCode>
    <tns:IN_PARAMETER>
        <q1:TKN_ID>${this.TKN_ID}</q1:TKN_ID>
        <q1:SKHN_CD>${this.SKHN_CD}</q1:SKHN_CD>
        <q1:KSSIHH_TYP>${this.KSSIHH_TYP}</q1:KSSIHH_TYP>
`;
        if (this.HIYKSSI_FLG === '1') {
            message += `
        <q1:HIYKSSI_FLG>${this.HIYKSSI_FLG}</q1:HIYKSSI_FLG>
        <q1:HIYKSSI_TYP>${this.HIYKSSI_TYP}</q1:HIYKSSI_TYP>
`;
        }
        message += `
        <q1:KNY_DT>${this.KNY_DT}</q1:KNY_DT>
`;
        if (this.KNSHKN_INFO !== null) {
            message += '<q1:KNSHKN_INFO>';
            for (const info of this.KNSHKN_INFO.KnshknInfo) {
                message += `
            <q2:KnshknInfo>
                <q2:KNSH_TYP>${info.KNSH_TYP}</q2:KNSH_TYP>
                <q2:KNYMI_NUM>${info.KNYMI_NUM}</q2:KNYMI_NUM>
            </q2:KnshknInfo>
`;
            }
        }
        message += '</q1:KNSHKN_INFO>';
        message += '</tns:IN_PARAMETER>';
        message += '</tns:PreserveCode>';
        return message;
    }
}
exports.PreserveCodeIn = PreserveCodeIn;
