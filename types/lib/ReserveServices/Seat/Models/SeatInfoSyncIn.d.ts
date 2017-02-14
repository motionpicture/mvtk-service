import BaseIn from '../../../Common/models/BaseIn';
/**
 * 券種情報
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
 * 購入管理番号情報（itemArray）
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
 */
export interface ZskInfo {
    /**
     * 座席コード
     */
    ZSK_CD: string;
}
/**
 * 座席指定情報連携In
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
 * @class
 */
export declare class SeatInfoSyncIn extends BaseIn {
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
    toXml(): string;
}
