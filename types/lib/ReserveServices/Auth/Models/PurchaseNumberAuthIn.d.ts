import BaseIn from '../../../Common/models/BaseIn';
/**
 * 購入管理番号情報
 */
export interface KnyknrNoInfoIn {
    /**
     * 購入管理番号（ムビチケ購入番号）
     */
    KNYKNR_NO: string;
    /**
     * PINコード（ムビチケ暗証番号）
     */
    PIN_CD: string;
}
/**
 * 購入管理番号認証In
 */
export interface IPurchaseNumberAuthIn {
    /**
     * 興行会社コード
     */
    kgygishCd: string;
    /**
     * 情報種別コード
     */
    jhshbtsCd: string;
    /**
     * 購入管理番号情報
     */
    knyknrNoInfoIn: KnyknrNoInfoIn[];
    /**
     * 作品コード
     */
    skhnCd: string;
    /**
     * サイトコード
     */
    stCd: string;
    /**
     * 上映年月日(YYYY/MM/DD)
     */
    jeiYmd: string;
}
/**
 * 購入管理番号認証Inクラス
 * @class
 * @extends {BaseIn}
 */
export declare class PurchaseNumberAuthIn extends BaseIn {
    /**
     * 興行会社コード
     */
    kgygishCd: string;
    /**
     * 情報種別コード
     */
    jhshbtsCd: string;
    /**
     * 購入管理番号情報
     */
    knyknrNoInfoIn: KnyknrNoInfoIn[];
    /**
     * 作品コード
     */
    skhnCd: string;
    /**
     * サイトコード
     */
    stCd: string;
    /**
     * 上映年月日(YYYY/MM/DD)
     */
    jeiYmd: string;
    toXml(): string;
}
