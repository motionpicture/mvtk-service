import BaseIn from '../../../Common/models/BaseIn';
/**
 * WebMoney決済実行inクラス
 * @class
 * @extends {BaseIn}
 */
export declare class WebMoneyEntryIn extends BaseIn {
    kssiknrNo: string;
    knshknknrNo: string;
    skhnNm: string;
    dvcTyp: string;
    knshknInfo: {
        KnshInfoIn: KnshInfoIn[];
    };
    toXml(): string;
}
/**
 * KnshInfoIn
 * @interface
 */
export interface KnshInfoIn {
    KNSHKNKNRMISI_NO: string;
    KNSHKBN_NM: string;
    KNSHKNHMBI_UNIP: string;
    KNYMI_NUM: string;
}
/**
 * WebMoney決済実行in
 * @interface
 */
export interface IWebMoneyEntryIn {
    /**
     * 決済管理番号
     */
    kssiknrNo: string;
    /**
     * 鑑賞券管理番号
     */
    knshknknrNo: string;
    /**
     * 作品コード
     */
    skhnNm: string;
    /**
     * 購入デバイス区分
     */
    dvcTyp: string;
    /**
     * KnshInfoIn array
     */
    knshknInfo: {
        KnshInfoIn: KnshInfoIn[];
    };
}
