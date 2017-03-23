"use strict";
const BaseIn_1 = require("../../../Common/models/BaseIn");
/**
 * 座席指定情報連携Inクラス
 * @class SeatInfoSyncIn
 * @extends {BaseIn}
 */
class SeatInfoSyncIn extends BaseIn_1.default {
    toXml() {
        let messege = `<tns:SeatInfoSync>
            <tns:kgygishCd>${this.kgygishCd}</tns:kgygishCd>
            <tns:yykDvcTyp>${this.yykDvcTyp}</tns:yykDvcTyp>
            <tns:trkshFlg>${this.trkshFlg}</tns:trkshFlg>
            <tns:kgygishSstmZskyykNo>${this.kgygishSstmZskyykNo}</tns:kgygishSstmZskyykNo>
            <tns:kgygishUsrZskyykNo>${this.kgygishUsrZskyykNo}</tns:kgygishUsrZskyykNo>
            <tns:jeiDt>${this.jeiDt}</tns:jeiDt>
            <tns:kijYmd>${this.kijYmd}</tns:kijYmd>
            <tns:stCd>${this.stCd}</tns:stCd>
            <tns:screnCd>${this.screnCd}</tns:screnCd>
            <tns:knyknrNoInfo>`;
        if (this.knyknrNoInfo.length > 0) {
            for (const info of this.knyknrNoInfo) {
                // tslint:disable-next-line:no-multiline-string
                messege += `<q1:KnyknrNoInfo>
                    <q1:KNSH_INFO>`;
                if (this.knyknrNoInfo.length > 0) {
                    for (const ticket of info.KNSH_INFO) {
                        messege += `<q1:KnshInfo>
                            <q1:KNSH_TYP>${ticket.KNSH_TYP}</q1:KNSH_TYP>
                            <q1:MI_NUM>${ticket.MI_NUM}</q1:MI_NUM>
                        </q1:KnshInfo>`;
                    }
                }
                messege += `</q1:KNSH_INFO>
                    <q1:KNYKNR_NO>${info.KNYKNR_NO}</q1:KNYKNR_NO>
                    <q1:PIN_CD>${info.PIN_CD}</q1:PIN_CD>
                </q1:KnyknrNoInfo>`;
            }
        }
        messege += '</tns:knyknrNoInfo>';
        messege += '<tns:zskInfo>';
        if (this.zskInfo.length > 0) {
            for (const info of this.zskInfo) {
                messege += `<q2:ZskInfo>
                    <q2:ZSK_CD>${info.ZSK_CD}</q2:ZSK_CD>
                </q2:ZskInfo>`;
            }
        }
        messege += `</tns:zskInfo>
            <tns:skhnCd>${this.skhnCd}</tns:skhnCd>
        </tns:SeatInfoSync>`;
        return messege;
    }
}
exports.SeatInfoSyncIn = SeatInfoSyncIn;
