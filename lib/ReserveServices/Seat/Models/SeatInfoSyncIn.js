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
                messege += `<q1: KnyknrNoInfo>
                    <tns:KNSH_INFO>${info.KNSH_INFO}</tns:KNSH_INFO>
                    <tns:KNYKNR_NO>${info.KNYKNR_NO}</tns:KNYKNR_NO>
                    <tns:PIN_CD>${info.PIN_CD}</tns:PIN_CD>
                </q1: KnyknrNoInfo>`;
            }
        }
        messege += '</tns:knyknrNoInfo>';
        messege += '<tns:zskInfo>';
        if (this.zskInfo.length > 0) {
            for (const info of this.zskInfo) {
                messege += `<q2: ZskInfo>
                    <tns:ZSK_CD>${info.ZSK_CD}</tns:ZSK_CD>
                </q2: ZskInfo>`;
            }
        }
        messege += `</tns:zskInfo>
            <tns:skhnCd>${this.skhnCd}</tns:skhnCd>
        <tns:SeatInfoSync>`;
        return messege;
    }
}
exports.SeatInfoSyncIn = SeatInfoSyncIn;
