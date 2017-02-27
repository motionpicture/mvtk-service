"use strict";
const BaseIn_1 = require("../../../Common/models/BaseIn");
/**
 * 購入管理番号メール送信inクラス
 */
class DeliveryIn extends BaseIn_1.default {
    toXml() {
        // パラメータの順序が異なるとエラーになるので注意
        let message = `
<tns:Delivery>
    <tns:IN_PARAMETER>
        <q1:KSSIKNR_NO>${this.KSSIKNR_NO}</q1:KSSIKNR_NO>
        <q1:KNYKNR_NO>${this.KNYKNR_NO}</q1:KNYKNR_NO>
        <q1:MAILADDRESS>${this.MAILADDRESS}</q1:MAILADDRESS>
        <q1:ADDRESS>${this.ADDRESS}</q1:ADDRESS>
        <q1:SKHN_NM>${this.SKHN_NM}</q1:SKHN_NM>
`;
        if (this.KNSHKN_INFO !== null) {
            // tslint:disable-next-line:no-multiline-string
            message += `
        <q1:KNSHKN_INFO>
`;
            for (const info of this.KNSHKN_INFO.KNSHKN) {
                message += `
            <q2:KNSHKN>
                <q2:KNSHKBN_NM>${info.KNSHKBN_NM}</q2:KNSHKBN_NM>
                <q2:KNYMI_NUM>${info.KNYMI_NUM}</q2:KNYMI_NUM>
            </q2:KNSHKN>
`;
            }
            // tslint:disable-next-line:no-multiline-string
            message += `
        </q1:KNSHKN_INFO>
`;
        }
        message += `
        <q1:QRCD_URL>${this.QRCD_URL}</q1:QRCD_URL>
        <q1:DGTLINCNTV_URL>${this.DGTLINCNTV_URL}</q1:DGTLINCNTV_URL>
        <q1:DVC_TYP>${this.DVC_TYP}</q1:DVC_TYP>
        <q1:MLTMPLT_CD>${this.MLTMPLT_CD}</q1:MLTMPLT_CD>
        <q1:TOTALCOST>${this.TOTALCOST}</q1:TOTALCOST>
        <q1:SKHN_CD>${this.SKHN_CD}</q1:SKHN_CD>
    </tns:IN_PARAMETER>
</tns:Delivery>
`;
        return message;
    }
}
exports.DeliveryIn = DeliveryIn;
