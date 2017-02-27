"use strict";
const BaseIn_1 = require("../../../Common/models/BaseIn");
/**
 * 購入管理番号認証Inクラス
 * @class PurchaseNumberAuthIn
 * @extends {BaseIn}
 */
class PurchaseNumberAuthIn extends BaseIn_1.default {
    toXml() {
        let messege = `
        <tns:PurchaseNumberAuth>
            <tns:kgygishCd>${this.kgygishCd}</tns:kgygishCd>
            <tns:jhshbtsCd>${this.jhshbtsCd}</tns:jhshbtsCd>
            <tns:knyknrNoInfoIn>
                `;
        if (this.knyknrNoInfoIn.length > 0) {
            for (const info of this.knyknrNoInfoIn) {
                messege += `<q1:KnyknrNoInfoIn>
                    <q1:KNYKNR_NO>${info.KNYKNR_NO}</q1:KNYKNR_NO>
                    <q1:PIN_CD>${info.PIN_CD}</q1:PIN_CD>
                </q1:KnyknrNoInfoIn>
            `;
            }
        }
        messege += `</tns:knyknrNoInfoIn>
            <tns:skhnCd>${this.skhnCd}</tns:skhnCd>
            <tns:stCd>${this.stCd}</tns:stCd>
            <tns:jeiYmd>${this.jeiYmd}</tns:jeiYmd>
        </tns:PurchaseNumberAuth>`;
        return messege;
    }
}
exports.PurchaseNumberAuthIn = PurchaseNumberAuthIn;
