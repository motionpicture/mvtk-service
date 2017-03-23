import BaseIn from '../../../Common/models/BaseIn';
/**
 * 電子券QRコード生成inクラス
 * @class
 * @extends {BaseIn}
 */
export declare class CreateQrCodeIn extends BaseIn {
    /**
     * 購入管理番号
     */
    KNYKNR_NO: string;
    /**
     * PIN コード
     */
    PIN_CD: string;
    /**
     * 作品コード
     */
    SKHN_CD: string;
    toXml(): string;
}
/**
 * 電子券QRコード生成in
 * @interface
 */
export interface ICreateQrCodeIn {
    /**
     * 購入管理番号
     */
    KNYKNR_NO: string;
    /**
     * PIN コード
     */
    PIN_CD: string;
    /**
     * 作品コード
     */
    SKHN_CD: string;
}
