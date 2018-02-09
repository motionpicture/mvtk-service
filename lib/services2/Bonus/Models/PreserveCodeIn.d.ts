import { BaseIn } from '../../../common/models/BaseIn';
/**
 * 特典コード確保inクラス
 * @extends {BaseIn}
 */
export declare class PreserveCodeIn extends BaseIn {
    /**
     * トークンID (購入フローユニークID)
     */
    TKN_ID: string;
    /**
     * 作品コード
     */
    SKHN_CD: string;
    /**
     * 決済方法区分 (決済方法の区分 00：カード決済 01：auかんたん決済 02：ドコモケータイ払い 04：ギフトカード決済 07：WebMoney決済)
     */
    KSSIHH_TYP: string;
    /**
     * 併用決済フラグ (併用決済であるかどうかのフラグ)
     */
    HIYKSSI_FLG: string;
    /**
     * 併用決済区分 (併用決済を行う決済方法区分 04：ギフトカード決済)
     */
    HIYKSSI_TYP: string;
    /**
     * 購入日時 (チケットの購入日時)
     */
    KNY_DT: string;
    /**
     * 鑑賞券情報 (購入した鑑賞券の情報)
     */
    KNSHKN_INFO: {
        KnshknInfo: IKnshknInfo[];
    };
    /**
     * XML変換
     * @method toXml
     */
    toXml(): string;
}
/**
 * 鑑賞券情報
 */
export interface IKnshknInfo {
    KNSH_TYP: string;
    KNYMI_NUM: string;
}
/**
 * 特典コード確保in型
 */
export interface IPreserveCodeIn {
    /**
     * トークンID (購入フローユニークID)
     */
    TKN_ID: string;
    /**
     * 作品コード
     */
    SKHN_CD: string;
    /**
     * 決済方法区分 (決済方法の区分 00：カード決済 01：auかんたん決済 02：ドコモケータイ払い 04：ギフトカード決済 07：WebMoney決済)
     */
    KSSIHH_TYP: string;
    /**
     * 併用決済フラグ (併用決済であるかどうかのフラグ)
     */
    HIYKSSI_FLG: string;
    /**
     * 併用決済区分 (併用決済を行う決済方法区分 04：ギフトカード決済)
     */
    HIYKSSI_TYP: string;
    /**
     * 購入日時 (チケットの購入日時)
     */
    KNY_DT: string;
    /**
     * 鑑賞券情報 (購入した鑑賞券の情報)
     */
    KNSHKN_INFO: {
        KnshknInfo: IKnshknInfo[];
    };
}
