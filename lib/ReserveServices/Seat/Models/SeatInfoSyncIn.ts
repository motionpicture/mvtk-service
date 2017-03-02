import BaseIn from '../../../Common/models/BaseIn';

/**
 * 券種情報
 * @interface KnshInfo
 */
export interface KnshInfo {
    /**
     * 券種区分
     */
    KNSH_TYP: string;
    /**
     * 枚数
     */
    MI_NUM: string;
}

/**
 * 購入管理番号情報
 * @interface KnyknrNoInfo
 */
export interface KnyknrNoInfo {
    /**
     * 購入管理番号（ムビチケ購入番号）
     */
    KNYKNR_NO: string;
    /**
     * PINコード（ムビチケ暗証番号）
     */
    PIN_CD: string;
    /**
     *  券種情報
     */
    KNSH_INFO: KnshInfo[];
}

/**
 * 座席情報
 * @interface ZskInfo
 */
export interface ZskInfo {
    /**
     * 座席コード
     */
    ZSK_CD: string;
}

/**
 * 座席指定情報連携In
 * @interface ISeatInfoSyncIn
 */
export interface ISeatInfoSyncIn {
    /**
     * 興行会社コード
     */
    kgygishCd: string;
    /**
     * 予約デバイス区分
     */
    yykDvcTyp: string;
    /**
     * 取消フラグ
     */
    trkshFlg: string;
    /**
     * 興行会社システム座席予約番号
     */
    kgygishSstmZskyykNo: string;
    /**
     * 興行会社ユーザー座席予約番号
     */
    kgygishUsrZskyykNo: string;
    /**
     * 上映日時
     */
    jeiDt: string;
    /**
     * 計上年月日
     */
    kijYmd: string;
    /**
     * サイトコード
     */
    stCd: string;
    /**
     * スクリーンコード
     */
    screnCd: string;
    /**
     * 購入管理番号情報
     */
    knyknrNoInfo: KnyknrNoInfo[];
    /**
     * 座席情報（itemArray）
     */
    zskInfo: ZskInfo[];
    /**
     * 作品コード
     */
    skhnCd: string;
}

/**
 * 座席指定情報連携Inクラス
 * @class SeatInfoSyncIn
 * @extends {BaseIn}
 */
export class SeatInfoSyncIn extends BaseIn {
    /**
     * 興行会社コード
     */
    public kgygishCd: string;
    /**
     * 予約デバイス区分
     */
    public yykDvcTyp: string;
    /**
     * 取消フラグ
     */
    public trkshFlg: string;
    /**
     * 興行会社システム座席予約番号
     */
    public kgygishSstmZskyykNo: string;
    /**
     * 興行会社ユーザー座席予約番号
     */
    public kgygishUsrZskyykNo: string;
    /**
     * 上映日時
     */
    public jeiDt: string;
    /**
     * 計上年月日
     */
    public kijYmd: string;
    /**
     * サイトコード
     */
    public stCd: string;
    /**
     * スクリーンコード
     */
    public screnCd: string;
    /**
     * 購入管理番号情報
     */
    public knyknrNoInfo: KnyknrNoInfo[];
    /**
     * 座席情報（itemArray）
     */
    public zskInfo: ZskInfo[];
    /**
     * 作品コード
     */
    public skhnCd: string;

    public toXml(): string {
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
